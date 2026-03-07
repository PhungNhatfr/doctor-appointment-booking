import express from 'express';
import { addAppointment, getAllAppointments } from '../controllers/appointmentController.js';
import userAuth from '../middleware/userAuth.js'

const appointmentRouter = express.Router();

appointmentRouter.post('/add-appointment', userAuth, addAppointment);
appointmentRouter.post('/get-all-appointments', userAuth, getAllAppointments);

export default appointmentRouter;