import mongoose from "mongoose";

const shortEatsSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    available: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    size: { type: Number, required: true },
    totalCalories: { type: Number, required: true },
    totalCarbs: { type: Number, required: true },
    totalProtein: { type: Number, required: true },
    totalFat: { type: Number, required: true },
    price: { type: Number, required: true }
});

const shortEatsModel = mongoose.models.shortEats || mongoose.model("shortEats", shortEatsSchema);

export default shortEatsModel;