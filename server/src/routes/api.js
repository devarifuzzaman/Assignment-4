import express from "express";
const router = express.Router();
import AuthMiddleware from "../middleware/AuthMiddleware.js";
import * as UserController from "../controllers/UserController.js";





// Users
router.get('/Login/:email',UserController.Login);
router.get('/OtpVerify/:email/:otp',UserController.OtpVerification);
router.get('/Logout',AuthMiddleware,UserController.LogOut);
router.post('/CreateProfile',AuthMiddleware,UserController.CreateProfile);
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile);
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile);

export default router;