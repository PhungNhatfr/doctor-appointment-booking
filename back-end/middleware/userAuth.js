import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

    const { token } = req.header;

    if (!token) {
        return res.status(409).json({
            success: false,
            message: "Not Authorized!"
        })
    }

    try {
        
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

export default userAuth;