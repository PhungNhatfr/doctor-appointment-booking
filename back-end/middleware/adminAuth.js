
import jwt from 'jsonwebtoken';


const adminAuth = async (req, res, next) => {

    const { token } = req.headers;
    
    if (!token) {
        res.status(409).json({
            success: false,
            message: "Not Admin Authorized!"
        })
    }
    
    try {
        
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if (token_decoded !== process.env.ADMIN + process.env.ADMIN_PASSWORD) {
            return res.status(409).json({
                success: false,
                message: "Email or password isn't correct."
            })
        } else {
            next()
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

export default adminAuth;