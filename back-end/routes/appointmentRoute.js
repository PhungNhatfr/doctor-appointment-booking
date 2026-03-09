import express from 'express';
import { addAppointment, cancelAppointmentAdmin, cancelAppointmentDoctor, cancelAppointmentUser, getAllAppointments } from '../controllers/appointmentController.js';
import adminAuth from '../middleware/adminAuth.js';
import doctorAuth from '../middleware/doctorAuth.js';
import userAuth from '../middleware/userAuth.js'

const appointmentRouter = express.Router();

appointmentRouter.post('/add-appointment', userAuth, addAppointment);
appointmentRouter.post('/get-all-appointments', userAuth, getAllAppointments);
appointmentRouter.post('/cancel-appointment-user', userAuth, cancelAppointmentUser);

appointmentRouter.post('/cancel-appointment-doctor', doctorAuth, cancelAppointmentDoctor);

appointmentRouter.post('/cancel-appointment-admin', adminAuth, cancelAppointmentAdmin);


export default appointmentRouter;