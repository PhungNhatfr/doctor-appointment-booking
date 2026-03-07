import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    doctorId: { type: String, required: true },
    userData: {type: Object, required: true},
    doctorData: {type: Object, required: true},
    splotDate: {type: String, required: true},
    splotTime: {type: String, required: true},
    date: {type: Number, required: true},
    fees: {type: Number, required: true},
    payment: {type: Boolean, default: false},
    cancelled: {type: Boolean, default: false},
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);

export default appointmentModel;