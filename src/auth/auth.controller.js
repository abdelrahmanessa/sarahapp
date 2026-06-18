import { Router } from "express";
import { createaccount,loginuser } from "./auth.services.js";
import { correctresponce } from "../common/responce/correct.responce.js";
import { auth } from "../common/middleware/auth.js";
import { generateAcessToken } from "./auth.services.js";
import { validator } from "../common/middleware/validator.js";
import {signupschema,loginschema} from './auth.schemavalidator.js'
const router =Router();

router.post('/signup',validator(signupschema),async(req,res)=>{
let signup= await createaccount(req.body)
correctresponce({res,data:signup,status:201})
})

router.post('/login',validator(loginschema),async(req,res)=>{
    let login =await loginuser(req.body,req.get('host'))
    correctresponce({res,data:login,status:200,message:"good"})

})



router.get('/getacesstoken',async(req,res)=>{
    let data=await generateAcessToken(req.headers.authorization,req.get('host'))
    
         correctresponce({res,data,status:200,message:"the refrish token is generate acesstoken"})

})


export default router;