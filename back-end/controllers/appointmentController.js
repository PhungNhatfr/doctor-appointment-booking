
import userModel from '../models/userModel.js';
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';


const addAppointment = async (req, res) => {

    try {

        const { userId, doctorId, splotDate, splotTime } = req.body;


        const userExisted = await userModel.findById(userId);
        if (!userExisted) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist"
            })
        }

        const doctorExisted = await doctorModel.findById(doctorId);
        if (!doctorExisted) {
            return res.status(404).json({
                success: false,
                message: "Doctor doesn't exist"
            })
        }

        if (!splotDate && !splotTime) {
            return res.status(404).json({
                success: false,
                message: "Please choose date !"
            })
        }



        const fees = doctorExisted.fees;

        const appointmentData = {
            userId,
            doctorId,
            userData: userExisted,
            doctorData: doctorExisted,
            splotDate,
            splotTime,
            fees,
            date: Date.now()
        }

        // Update splotDate and splotTime in doctorExisted
        let schedule_booked = doctorExisted.schedule_booked;

        if (schedule_booked[splotDate]) {
            schedule_booked[splotDate].push(splotTime)
        } else {
            schedule_booked[splotDate] = [splotTime]

        }

        await doctorModel.findByIdAndUpdate(doctorId, { schedule_booked })

        // Update splotDate and splotTime in userExisted
        let cartAppointment = userExisted.cartAppointment;

        if (cartAppointment[doctorId]) {
            if (cartAppointment[doctorId][splotDate]) {
                cartAppointment[doctorId][splotDate].push(splotTime)
            } else {
                cartAppointment[doctorId][splotDate] = [splotTime]
            }
        } else {
            cartAppointment[doctorId] = {
                [splotDate]: [splotTime]
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartAppointment })

        // Create appointment in db
        const newAppointment = new appointmentModel(appointmentData);
        const appointment = await newAppointment.save();

        res.json({
            success: true,
            message: "Add Appointment Successfully!"
        })

    } catch (error) {

        console.log('Error at addAppointment: ', error);
        res.json({
            success: false,
            message: error.message
        })

    }

}

const getAllAppointments = async (req, res) => {

    try {

        const appointments = await appointmentModel.find({cancelled: false, completed: true}).sort({ date: -1 });

        res.json({
            success: true,
            appointments
        })


    } catch (error) {
        console.log("Error at getAllAppointments: ", error);
        res.json({
            success: false,
            message: error.message
        })
    }

}

const getUserAppointments = async (req, res) => {

    try {

        const { userId } = req.body;

        const ThreeDayInMs = 3 * 24 * 60 * 60 * 1000;
        const currentDay = new Date();
        currentDay.setHours(0, 0, 0, 0);

        const appointments = await appointmentModel.find({
            userId: userId,
            $or: [
                { cancelled: false },
                {
                    cancelled: true,
                    cancelledAt: { $gte: new Date(currentDay - ThreeDayInMs) }
                }
            ]
        }).sort({ splotDate: -1 });

        if (!appointments) {
            return res.status(404).json({
                success: false,
                message: "Can't find any appointment!"
            })
        }

        res.json({
            success: true,
            appointments
        })

    } catch (error) {

        console.log("Error at getUserAppointments: ", error.message);
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

const getDoctorAppointments = async (req, res) => {

    try {

        const { doctorId } = req.body;

        const ThreeDayInMs = 3 * 24 * 60 * 60 * 1000;
        const currentDay = Date.now()

        const appointments = await appointmentModel.find({
            doctorId: doctorId,
            $or: [
                { cancelled: false },
                { cancelledAt: currentDay - ThreeDayInMs }
            ]
        })

        if (!appointments) {
            return res.status(404).json({
                success: false,
                message: "Can't find any appointment!"
            })
        }

        res.json({
            success: true,
            appointments
        })

    } catch (error) {

        console.log("Error at getDoctorAppointments: ", error.message);
        res.status(400).json({
            success: false,
            message: error.message
        })

    }

}

const updateAppointment = async (req, res) => {


}

const processCancellation = async (appointmentId, res) => {

    const appointment = await appointmentModel.findById(appointmentId);

    if (!appointment) {
        return res.status(404).json({
            success: false,
            message: "Can't cancel this appointment"
        })
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true, cancelledAt: Date.now() });

    // Remove date appointment in doctorData

    const { splotDate, splotTime, doctorId } = appointment;

    const doctorData = await doctorModel.findById(doctorId);
    let schedule_booked = doctorData.schedule_booked;
    if (schedule_booked[splotDate]) {
        schedule_booked[splotDate] = schedule_booked[splotDate].filter((time) => time !== splotTime);

        doctorData.markModified('schedule_booked');
        await doctorData.save();
    } 

    await doctorModel.findByIdAndUpdate(doctorId, { schedule_booked });

    res.json({
        success: true,
        message: "Cancel Appointment Successfully"
    })

}

const cancelAppointmentAdmin = async (req, res) => {
    try {
        const { appointmentId } = req.body;

        await processCancellation(appointmentId, res);

    } catch (error) {
        console.log("Error at cancelAppointmentAdmin: ", error);
        res.json({
            success: false,
            message: error.message
        })

    }
}

const cancelAppointmentUser = async (req, res) => {
    try {
        const { appointmentId, userId } = req.body;

        const appointment = await appointmentModel.findById(appointmentId);

        if (appointment.userId !== userId) {
            return res.status(404).json({
                success: false,
                message: "User Invalid"
            })
        }

        await processCancellation(appointmentId, res);

    } catch (error) {
        console.log("Error at cancelAppointmentUser: ", error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const cancelAppointmentDoctor = async (req, res) => {
    try {
        const { appointmentId, doctorId } = req.body;

        const appointment = await appointmentModel.findById(appointmentId);

        if (appointment.doctorId !== doctorId) {
            return res.status(404).json({
                success: false,
                message: "User Invalid"
            })
        }

        await processCancellation(appointmentId, res);

    } catch (error) {
        console.log("Error at cancelAppointmentDoctor: ", error);
        res.json({
            success: false,
            message: error.message
        })

    }
}


const deleteAppointmentAuto = async (req, res) => {

}

export { addAppointment, getAllAppointments, updateAppointment, processCancellation, cancelAppointmentAdmin, cancelAppointmentUser, cancelAppointmentDoctor, deleteAppointmentAuto, getUserAppointments, getDoctorAppointments }

