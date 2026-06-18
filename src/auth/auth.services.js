import { comparedata, hashdata } from "../common/middleware/hashpassword.js"
import userModel from "../database/models/usermodels.js"
import { Notfound,Badrequest } from "../common/responce/error.responce.js"
import { generatetoken } from "../common/middleware/auth.js"
import { correctresponce } from "../common/responce/correct.responce.js"
import { generatetokenacess } from "../common/middleware/auth.js"
import joi  from "joi"
export const createaccount =async(data)=>{
    let {name,email,password,uniquename}=data  

    let hashpassword= await hashdata(password)
let existemail=await userModel.findOne({email})
if(existemail){
    return ({message:"email is existed",data:existemail})
}
if(!existemail){
    let adddata= await userModel.insertOne({
        name,email,password:hashpassword,existemail,uniquename
    })
    if(adddata){
        return ({message:"the data is inserted correctly",data:adddata})
    }
}
}
export const loginuser =async(data,host)=>{
let {email,password}=data;
let userdata=await userModel.findOne({email})
if(!userdata){
    return Notfound({message:"email not found"})
}
let comparepassword = await comparedata(password,userdata.password)
if(!comparepassword){
    return Badrequest({message:"worng password"})
}

if(userdata){
    if(comparepassword){
    let {acesstoken,refreshtoken} =await generatetoken({id:userdata._id},host,userdata.role)
return({message:"the login is corretlt",acesstoken,refreshtoken})

    }
    
}
}



 export const generateAcessToken =async(refroken,host)=>{

    let accestoken= await generatetokenacess(refroken,host)
    return accestoken
 }