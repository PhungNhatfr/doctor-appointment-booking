import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: {type: String, require: true},
    userId: {type: String, require: true},
    payment: {type: Boolean, require: true, default: false},
    date: {type: Number, require: true},
    fee: {type: Number, require: true},

})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);

export default appointmentModel;