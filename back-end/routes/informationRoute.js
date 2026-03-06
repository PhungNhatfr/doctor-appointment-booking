import express from 'express';
import { getUser, updateUser, addDoctor } from '../controllers/informationController.js';
import upload from '../middleware/multer.js';
import userAuth from '../middleware/userAuth.js';
import adminAuth from '../middleware/adminAuth.js';

const informationRouter = express.Router();

informationRouter.post('/update-user', upload.single('avatar'), userAuth,   updateUser);
informationRouter.post('/get-user', userAuth, getUser);

informationRouter.post('/add-doctor', upload.single('image'), adminAuth, addDoctor);


export default informationRouter;

