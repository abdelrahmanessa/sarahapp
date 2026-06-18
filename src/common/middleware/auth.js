import jwt from 'jsonwebtoken'
import { env } from '../../../config/env.services.js'
export const auth = async(req,res,next)=>{
    let token=req.headers.token    
 let decodedData=jwt.decode(token)
 console.log(decodedData);
 let signature=''
 switch (decodedData.aud[0]) {
    case 0:
        signature=env.usersignture
        break;
  case 1:
        signature=env.adminsignture
        break;
    default:
        break;
 }
    let decoded=await jwt.verify(token,signature)
    req.user=decoded
    next(); 
    
}

export const generatetoken = async(payload,host,role)=>{

 let signature =''
 let refreshsignature=''
 switch (role) {
    case 0:
        signature=env.usersignture
        refreshsignature=env.refreshUser
        break;
  case 1:
        signature=env.adminsignture
        refreshsignature=env.refreshAdmin
        break;
 
    default:
        break;
 }
    
let acesstoken= await jwt.sign(payload,signature,{expiresIn:'30mins',issuer:host,audience:[role]})
let refreshtoken= await jwt.sign(payload,refreshsignature,{expiresIn:'1y',issuer:host,audience:[role]})

return {acesstoken,refreshtoken}
}

export const generatetokenacess =(reftoken,host)=>{
let decodedreftoken=jwt.decode(reftoken)
console.log(decodedreftoken);

let signature=''
switch (decodedreftoken.aud[0]) {
    case 0:
        signature = env.usersignture
        break;
 case 1:
        signature = env.adminsignture
        break;
    default:
        break;
}
let accestoken = jwt.sign({id:decodedreftoken.id},signature,{expiresIn:'30min',issuer:host})
return accestoken
}
