
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
        
        const appointments = await appointmentModel.find({}).sort({ date: -1 });
        
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

const updateAppointment = async (req, res) => {

}

const cancelAppointment = async (req, res) => {

}

const deleteAppointmentAuto = async (req, res) => {

}

export { addAppointment, getAllAppointments, updateAppointment, cancelAppointment, deleteAppointmentAuto }

