import express from 'express';
import { adminLogin, doctorLogin, login, register } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.post('/admin-login', adminLogin);
userRouter.post('/doctor-login', doctorLogin);

export default userRouter;