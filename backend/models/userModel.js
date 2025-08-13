import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  age: { type: Number, min: 1, max: 120 },
  weight: { type: Number, min: 1 },
  height: { type: Number, min: 1 },
  goal: { 
    type: String, 
    enum: ['Lose Weight', 'Gain Muscle', 'Maintain Weight', 'Improve Endurance', 'General Fitness'] 
  },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String },
  agreeToTerms: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String }
}, { timestamps: true });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;