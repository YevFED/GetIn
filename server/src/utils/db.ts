import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Database not connected");
  }
};
