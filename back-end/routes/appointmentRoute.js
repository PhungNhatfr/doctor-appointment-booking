import express from 'express';
import { addAppointment, cancelAppointmentAdmin, cancelAppointmentDoctor, cancelAppointmentUser, getAllAppointments, getDoctorAppointments, getUserAppointments } from '../controllers/appointmentController.js';
import adminAuth from '../middleware/adminAuth.js';
import doctorAuth from '../middleware/doctorAuth.js';
import userAuth from '../middleware/userAuth.js'

const appointmentRouter = express.Router();

appointmentRouter.post('/add-appointment', userAuth, addAppointment);
appointmentRouter.post('/cancel-appointment-user', userAuth, cancelAppointmentUser);
appointmentRouter.post('/get-user-appointments', userAuth, getUserAppointments);

appointmentRouter.post('/cancel-appointment-doctor', doctorAuth, cancelAppointmentDoctor);
appointmentRouter.post('/get-doctor-appointments', doctorAuth, getDoctorAppointments);

appointmentRouter.post('/cancel-appointment-admin', adminAuth, cancelAppointmentAdmin);
appointmentRouter.post('/get-all-appointments', adminAuth, getAllAppointments);


export default appointmentRouter;