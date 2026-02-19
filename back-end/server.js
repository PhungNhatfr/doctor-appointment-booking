import express from "express"
import 'dotenv/config'
import cors from "cors"
import connectDB from "./config/mongodb.js";
import connectCloundinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import informationRouter from "./routes/informationRoute.js";

// Create Express and Http server
const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloundinary();

// Middleware
app.use(express.json());
app.use(cors());

// api endpoint
app.use('/api/user', userRouter);
app.use('/api/information', informationRouter);
app.use('/api/appoitment', appointmentRouter);

app.get('/', (req, res) => {

    res.send("API working");
})

app.listen(port, () => console.log("Server started on port: ", port))




