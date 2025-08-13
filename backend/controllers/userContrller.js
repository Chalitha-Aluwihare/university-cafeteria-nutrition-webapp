import userModel from "../models/userModel.js"; // Corrected path
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { sendVerificationEmail } from "../utils/emailUtils.js"; // Corrected path

// Generate JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Send Verification Code
const sendVerificationCode = async (req, res) => {
  const { email } = req.body;

  try {
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    const user = await userModel.findOne({ email });
    if (user && user.isVerified) {
      return res.json({ success: false, message: "Email is already registered and verified" });
    }

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    if (user) {
      user.verificationCode = verificationCode;
      await user.save();
    } else {
      const newUser = new userModel({
        email,
        verificationCode,
        isVerified: false,
      });
      await newUser.save();
    }

    await sendVerificationEmail(email, verificationCode);
    res.json({ success: true, message: "Verification code sent to your email" });
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.json({ success: false, message: "Error sending verification code" });
  }
};

// Verify User Email
const verifyEmail = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.isVerified) {
      return res.json({ success: false, message: "Email is already verified" });
    }

    if (user.verificationCode !== code) {
      return res.json({ success: false, message: "Invalid verification code" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();

    res.json({ success: true, message: "Email successfully verified" });
  } catch (error) {
    console.error("Verification error:", error);
    res.json({ success: false, message: "Error verifying email" });
  }
};

// User Registration Logic
const registerUser = async (req, res) => {
  const { firstName, lastName, age, weight, height, goal, email, password, agreeToTerms } = req.body;

  try {
    if (!firstName || !lastName || !email || !password || !age || !agreeToTerms) {
      return res.json({ success: false, message: "Please enter all required fields" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }
    
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.json({ success: false, message: "Please verify your email first." });
    }
    if (user.isVerified) {
      return res.json({ success: false, message: "Email is already registered and verified" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.weight = weight;
    user.height = height;
    user.goal = goal;
    user.password = hashedPassword;
    user.agreeToTerms = agreeToTerms;
    user.isVerified = true;
    await user.save();
    
    const token = createToken(user._id);
    res.json({ success: true, message: "Account created successfully", token, user });
  } catch (error) {
    console.error("Registration error:", error);
    res.json({ success: false, message: "Error registering user" });
  }
};

// User Login Logic
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    if (!user.isVerified) {
      return res.json({ success: false, message: "Please verify your email before logging in" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, message: "Login successful", token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.json({ success: false, message: "Error logging in" });
  }
};

// Forgot Password Logic
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Email not found" });
    }

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    user.verificationCode = verificationCode;
    await user.save();

    await sendVerificationEmail(user.email, verificationCode);
    res.json({ success: true, message: "A verification code has been sent to your email" });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.json({ success: false, message: "Error processing request" });
  }
};

// Reset Password Logic
const resetPassword = async (req, res) => {
  const { email, code, newPassword } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.verificationCode !== code) {
      return res.json({ success: false, message: "Invalid verification code" });
    }

    if (newPassword.length < 8) {
      return res.json({ success: false, message: "New password must be at least 8 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.verificationCode = undefined;
    await user.save();

    res.json({ success: true, message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Password reset error:", error);
    res.json({ success: false, message: "Error resetting password" });
  }
};

export { loginUser, registerUser, verifyEmail, sendVerificationCode, forgotPassword, resetPassword };