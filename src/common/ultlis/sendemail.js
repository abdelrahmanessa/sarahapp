import nodemailer from 'nodemailer'
import { env } from '../../../config/env.services.js'

    const transporter=nodemailer.createTransport({
service:'gmail',
auth:{
    user: env.accountgmail  ,
    pass:env.accountpasswordgmail
}
    })
export const sendemail=async({to,subject,html})=>{

    const  info=await transporter.sendMail({
        from: env.accountgmail,
        to,
        subject,
        html
    })
console.log('send mail');

    return sendemail
}