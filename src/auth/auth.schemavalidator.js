import joi  from "joi"
  export const signupschema= joi.object({
        name:joi.string().required().min(3).max(30),
        email:joi.string().email().required(),
      password: joi.string().min(8).required(),
        uniquename:joi.string().required()
    })

   export const loginschema= joi.object({
        email:joi.string().email().required(),
      password: joi.string().min(8).required(),
        
    })
