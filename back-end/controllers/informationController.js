import { v2 as cloudinary } from 'cloudinary';
import userModel from '../models/userModel.js';


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

}

const deleteDoctor = async (req, res) => {

}

const getDoctor = async (req, res) => {

}

const updateDoctor = async (req, res) => {

}

export { updateUser, getUser, addDoctor, deleteDoctor, getDoctor, updateDoctor }

