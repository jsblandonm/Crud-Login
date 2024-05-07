import mongoose from "mongoose";
import { dbConnectiongString } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(dbConnectiongString);
    console.log(">>> Device connected");
  } catch (error) {
    console.log(error);
  }
};
