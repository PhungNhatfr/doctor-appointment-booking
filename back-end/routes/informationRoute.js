import express from 'express';
import { getUser, updateUser } from '../controllers/informationController.js';
import upload from '../middleware/multer.js';
import userAuth from '../middleware/userAuth.js';

const informationRouter = express.Router();

informationRouter.post('/update-user', upload.single('avatar'), userAuth,   updateUser);
informationRouter.post('/get-user', userAuth, getUser);


export default informationRouter;

