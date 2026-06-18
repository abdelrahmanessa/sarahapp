import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve( "../config/.env") });
const port = process.env.PORT 
const mood = process.env.MOOD
const salt = process.env.SALT
const urldb = process.env.URLDB
const adminsignture=process.env.ADMINSIGNTURE
const usersignture=process.env.USERSIGNTURE
const refreshUser= process.env.REFRISHUSERSIGNTURE
const refreshAdmin=process.env.REFRISHADMINSIGNTURE
export const env={
    port,
    mood,
    salt,
    urldb,
    adminsignture,
    usersignture,
    refreshAdmin,
    refreshUser
}