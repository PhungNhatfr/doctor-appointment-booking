import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import doctorModel from '../models/doctorModel.js';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({
                success: false,
                message: "User doesn't exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id)
            res.json({
                success: true,
                token
            })
        } else {
            res.json({
                success: false,
                message: "Invalid credentials"
            })

        }

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const emailExisted = await userModel.findOne({ email });

        // Verify email
        if (emailExisted) {
            return res.status(400).json({
                success: false,
                message: "Email existed. Please try again"
            })
        }
        // Valid email and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            })
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Please enter a string password"
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const adminLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (email === process.env.ADMIN && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({
                success: true,
                token
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Please try again!"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const doctorLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await doctorModel.findOne({ email });

        if (!user) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Doctor doesn't exist"
                }
            )
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            const token = createToken(user._id);
            
            res.json({
                success: true,
                token
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Email or password isn't valid"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export { login, register, adminLogin, doctorLogin }