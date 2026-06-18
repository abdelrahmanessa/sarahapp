import mongoose from "mongoose";
import {env} from  "../../config/env.services.js";
export const connectDB = async () => {

    await mongoose.connect(env.urldb).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Database connection failed", err);
    }); 
}