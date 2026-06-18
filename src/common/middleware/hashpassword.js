
import bycrypt from "bcrypt";
import {env} from "../../../config/env.services.js";

export const hashdata= async(data)=>{

const hashdata=await bycrypt.hash(data,+env.salt)
return hashdata
}


export const comparedata=async (data,hash)=>{

    const comparedata= await bycrypt.compare(data,hash)
    return comparedata
}