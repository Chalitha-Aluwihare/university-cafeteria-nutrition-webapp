import express from 'express';
import { loginUser, registerUser, verifyEmail, sendVerificationCode, forgotPassword, resetPassword } from '../controllers/userContrller.js';

const userRouter = express.Router();

userRouter.post("/send-verification", sendVerificationCode);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);

export default userRouter;