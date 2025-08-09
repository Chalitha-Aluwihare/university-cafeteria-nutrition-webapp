import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://new-user-01:user123@unieatscluster.dsrxvz8.mongodb.net/UniEats-WebApp").then(() => console.log("MongoDB connected successfully"));
}