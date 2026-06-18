import {env} from "../../../config/env.services.js";
export const errormessage = ({
    message = 'An error occurred',
    status = 400,
    extra = undefined
}={}) => {
    throw new Error(message, { cause: { status, extra } });
}
 
    export const Notfound= ({message="Not found",extra=undefined}={})=>{
return errormessage({message,status:404,extra})
    }
    export const Badrequest= ({message="Bad request",extra=undefined}={})=>{
        return errormessage({message,status:400,extra})
    }
    export const Unauthorized= ({message="Unauthorized",extra=undefined}={})=>{
        return errormessage({message,status:401,extra})
    }
    export const Forbidden= ({message="Forbidden",extra=undefined}={})=>{
        return errormessage({message,status:403,extra})
    }
    export const conflict= ({message="Conflict",extra=undefined}={})=>{
        return errormessage({message,status:409,extra})
    }
export const errorhandling= (err, req, res, next) => {

const mood= env.mood =="DEV"
const defaultmessage = "error went wrong"
const displaymessage= err.message || defaultmessage
const status=err.status ?err.status:err.cause?err.cause.status:500
    res.status(status).json({
         message: mood?displaymessage:defaultmessage,
         stack:mood? err.stack :null,
         extra:err.cause
        });
  }