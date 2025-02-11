import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import router from './src/routes/api.js';
import sendEmail from "./src/utility/emailUtility.js";
import {DATABASE, MAX_JSON_SIZE, URL_ENCODED,WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME, option} from './src/config/config.js';


const app = express();

// Global Application Middleware
app.use(cors({
 credentials: true,
 origin:["http://localhost:5173","https://assignment-4-o4o9.vercel.app/"]
}));

app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet({
 contentSecurityPolicy: {
  directives: {
   defaultSrc: ["'self'"], // Allow same-origin requests
   imgSrc: ["'self'", "http://localhost:3000","http://localhost:5173","https://assignment-4-o4o9.vercel.app/", "data:"], // Allow localhost images
  },
 },
}));
app.use(cookieParser());

// Rate Limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
 app.use(limiter);



 // MongoDB connection
 mongoose.connect(DATABASE,option).then((res)=>{
  console.log("MongoDB connected");
 }).catch((err)=>{
  console.log(err);
 })

 //Web Caching
app.set('etag',WEB_CACHE);
 // Set API Route
app.use("/api",router);
app.use("/upload-file", express.static("uploads"));

// Contact Form API Route
app.post("/api/contact", async (req, res) => {
 const { firstName, lastName, email, phone, message } = req.body;

 if (!firstName || !lastName || !email || !phone || !message) {
  return res.status(400).json({ success: false, message: "All fields are required." });
 }

 const emailResponse = await sendEmail({ firstName, lastName, email, phone, message });
 res.json(emailResponse);
});



export default app;