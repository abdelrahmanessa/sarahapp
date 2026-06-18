import { Router } from "express";
import { getuserdata } from "./user.services.js";
import { auth } from "../common/middleware/auth.js";
import { correctresponce } from "../common/responce/correct.responce.js";
import { updatedata } from "./user.services.js";
import { upload } from "../common/middleware/multer.js";

const router =Router()
router.get('/getuserid',auth,async(req,res)=>{
let id=req.user.id
console.log(id);

    let data= await getuserdata(id)
     correctresponce({res,data,status:200,message:"good"})

})

router.put('/updateuser',auth, async(req,res)=>{
let id =req.user.id;
let data= req.body;
let updateduser= await updatedata(id,data);
     correctresponce({res,data:updateduser,status:200,message:"the userdata is updated correctly"})

}
)
export default router;