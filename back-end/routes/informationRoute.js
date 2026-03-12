import express from 'express';
import { getUser, updateUser, addDoctor, getDoctor, updateDoctor, deleteDoctor, listDoctor, singleDoctor, listPatients } from '../controllers/informationController.js';
import upload from '../middleware/multer.js';
import userAuth from '../middleware/userAuth.js';
import adminAuth from '../middleware/adminAuth.js';
import doctorAuth from '../middleware/doctorAuth.js';

const informationRouter = express.Router();

informationRouter.post('/list-doctor', listDoctor);
informationRouter.post('/single-doctor', singleDoctor);

informationRouter.post('/update-user', upload.single('avatar'), userAuth,   updateUser);
informationRouter.post('/get-user', userAuth, getUser);

informationRouter.post('/add-doctor', upload.single('image'), adminAuth, addDoctor);
informationRouter.post('/delete-doctor', adminAuth, deleteDoctor);
informationRouter.post('/list-patients',adminAuth, listPatients);

informationRouter.post('/get-doctor', doctorAuth, getDoctor);
informationRouter.post('/update-doctor', doctorAuth, updateDoctor);



export default informationRouter;

