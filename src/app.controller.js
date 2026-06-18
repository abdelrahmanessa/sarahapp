import express from 'express';
import { errorhandling } from './common/responce/error.responce.js';
import {env} from '../config/env.services.js';
import {hashdata} from "./common/middleware/hashpassword.js";
import {comparedata} from "./common/middleware/hashpassword.js";
import {connectDB} from "./database/connection.js";
import authRouter from "./auth/auth.controller.js";
import userRouter from "./user/user.controller.js";

export const bootstrap =async () => {

const app = express();
app.use(express.json());
await connectDB();
app.use('/auth',authRouter);
app.use('/user',userRouter);

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.use(errorhandling);
app.use('{*dummy}',(req,res)=>{
    res.json({message:"url not found"})
})
app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
    
});
}