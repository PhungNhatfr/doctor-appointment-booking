import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    speciality: { type: String, required: true },
    education: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    experience: { type: String, required: true },
    fees: { type: Number, required: true },
    about_me: { type: String, required: true },
    schedule: { type: Object, default: {} },
})

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel;