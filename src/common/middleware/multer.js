
import multer  from "multer";
export const uploads=(file)=>{
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        const unquenamefile=Date.now()+file.originalname
        cb(null,unquenamefile)
    }
})

const upload=multer({storage})
return upload
}















// import multer  from "multer";

// export const upload =(file)=>
//     {
//  const storage=multer.diskStorage({

// destination:function(req,file,cb){
// cb(null,'uploads')
// },
// fileName:function(req,file,cb){
// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
// }})
//  const  upload=multer({storage})
 
//     return upload

// }