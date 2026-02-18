import { v2 as cloudinary } from 'cloudinary';

const connectCloundinary = async () => {

    cloudinary.config({
        clound_name: process.env.CLOUNDINARY_NAME,
        api_key: process.env.CLOUNDINARY_API_KEY,
        api_secret: process.env.CLOUNDINARY_API_SECRET

    })

}

export default connectCloundinary;