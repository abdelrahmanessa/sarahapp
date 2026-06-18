import userModel from "../database/models/usermodels.js"
import { comparedata } from "../common/middleware/hashpassword.js"
import { conflict, Notfound } from "../common/responce/error.responce.js"
import { hashdata } from "../common/middleware/hashpassword.js"
export const getuserdata=async(userid)=>{
let userdata= await userModel.findOne({_id:userid})
if(!userdata){
    return Notfound({message:"there is no data for this id"})
}
return ({message: "user is found"},userdata)
}
export const updatedata=async(userid ,data)=>
    {
    let {name,newpassword,password,uniquename}=data  
    let userdata= await userModel.findById(userid) 
    if(!userdata){
        Notfound({message:"user not found"})
    }   
let newhashpassword=''
if(password){
let comparedpassword= await comparedata(password,userdata.password)
if(comparedpassword){
newhashpassword= await hashdata(newpassword)
}
}
let existedaccessname= await userModel.findOne({uniquename})
if(existedaccessname){
    conflict({message:"there is accesname before "})
}
let newdata=await userModel.findByIdAndUpdate(userid,{name,password:newhashpassword,uniquename},{new:true})
return newdata
}
