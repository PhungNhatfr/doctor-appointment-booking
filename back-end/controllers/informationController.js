import { v2 as cloudinary } from 'cloudinary';
import userModel from '../models/userModel.js';
import doctorModel from '../models/doctorModel.js';
import bcrypt from 'bcrypt';
import validator from 'validator';


const updateUser = async (req, res) => {

    try {

        const { userId, name, phone, address, gender, birthday } = req.body;

        const avatar = req.file;

        let updateData = {};

        if (name) updateData.name = name
        if (phone) updateData.phone = phone
        if (address) updateData.address = address
        if (gender) updateData.gender = gender
        if (birthday) updateData.birthday = birthday

        if (avatar) {
            const result = (await cloudinary.uploader.upload(avatar.path, { resource_type: 'image' }));
            const imgUrl = result.secure_url;
            await userModel.findByIdAndUpdate(userId, { avatar: imgUrl });
        }

        await userModel.findByIdAndUpdate(userId, updateData);



        res.json({
            success: true,
            message: "Update successfully!"
        })

    } catch (error) {

        console.log(error)

        res.json({
            success: false,
            message: error.message
        })

    }


}

const getUser = async (req, res) => {

    try {

        const { userId } = req.body;

        const userData = await userModel.findById(userId);

        res.json({
            success: true,
            userData: userData
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })

    }

}

const addDoctor = async (req, res) => {

    try {

        const { name, email, password, speciality, education, address1, address2, experience, fees, about_me, schedule } = req.body;
        const image = req.file;

        const emailExisted = await doctorModel.findOne({ email });

        if (emailExisted) {
            res.status(400).json({
                success: false,
                message: "Email existed !"
            })
        }

        // Valid email and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            })
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Please enter a string password"
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        if (image) {
            const result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
            const imgUrl = result.secure_url;
        }

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            education,
            address1,
            address2,
            experience,
            fees,
            about_me,
            schedule,
        }

        const newDoctor = new doctorModel(doctorData);

        const doctor = await newDoctor.save()

        res.json({
            success: true,
            message: "Add Doctor Successfully"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const deleteDoctor = async (req, res) => {
    
    try {
        
        const { doctorId } = req.body;
        
        const doctorExisted = await doctorModel.findById(doctorId);
        
        if (!doctorExisted) {
            return res.json({
                success: false,
                message: "Can't delete this doctor"
            })
        }
        
        await doctorModel.findByIdAndDelete(doctorId);
        
        res.json({
            success: true,
            message: "Doctor is deleted"
        })
        
    } catch (error) {
        console.log("Error at deleteDoctor: ", error);
        res.json({
            success: false,
            message: error.message
        })
    }

}

const getDoctor = async (req, res) => {
    try {

        const { doctorId } = req.body;

        const dataDoctor = await doctorModel.findById(doctorId);

        res.json({
            success: true,
            dataDoctor
        })

    } catch (error) {
        console.log("Error at function getDoctor: ", error)
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

const updateDoctor = async (req, res) => {

    try {

        const { doctorId, name, speciality, education, address1, address2, experience, fees, about_me, schedule } = req.body;

        const image = req.file;

        const updateData = {};

        if (name) updateData.name = name;
        if (speciality) updateData.speciality = speciality;
        if (education) updateData.education = education;
        if (address1) updateData.address1 = address1;
        if (address2) updateData.address2 = address2;
        if (experience) updateData.experience = experience;
        if (fees) updateData.fees = fees;
        if (about_me) updateData.about_me = about_me;
        if (schedule) updateData.schedule = schedule;


        if (image) {
            const result = (await cloudinary.uploader.upload(image.path, { resource_type: 'image' }));
            const imgUrl = result.secure_url;
            await doctorModel.findByIdAndUpdate(doctorId, { image: imgUrl });
        }

        await doctorModel.findByIdAndUpdate(doctorId, updateData)

        res.json({
            success: true,
            message: "Update Successfully"
        })

    } catch (error) {
        console.log("Error at updateDoctor: ", error);
        res.json({
            success: false,
            message: error.message
        })
    }

}

export { updateUser, getUser, addDoctor, deleteDoctor, getDoctor, updateDoctor }

