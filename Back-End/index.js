import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('DB is connected')).catch((err) => console.log(err));


const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.listen(3000, () => console.log('Server is running in port 30000'));

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use('/api/listings', listingRouter);   

// the moddelwre for handling errors.
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });