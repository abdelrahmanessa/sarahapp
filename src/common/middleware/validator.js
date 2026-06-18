import { Badrequest } from "../responce/error.responce.js";
import joi from "joi";
export const validator = (scehma)=>{
return(req,res,next)=>{

    let {value,error}=scehma.validate(req.body,{abortEarly:false});
    if(error){

        Badrequest({message:"there is error validator",extra:error})
    }
    next()
}
}