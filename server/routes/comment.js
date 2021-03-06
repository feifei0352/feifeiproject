const express=require("express");
const router=express.Router();
const pool=require("../pool");
//获取评论
router.get("/getcomment",(req,res)=>{
    var obj=req.query;
    var $fid=obj.fid;
    var sql="SELECT * FROM reply WHERE fid=?";
    pool.query(sql,[$fid],(err,result)=>{
        if(err)console.log(err);
        res.writeHead(200,{"Access-Control-Allow-Origin":"*","Content-Type":"text/html; charset=utf-8"});
        res.write(JSON.stringify(result));
        res.end();
    })
})
//发送评论
router.post("/sendcomment",(req,res)=>{
     var obj=req.body;
     console.log(obj);
     var sql="INSERT INTO reply SET ?";   
     pool.query(sql,[obj],(err,result)=>{
         if(err)console.log(err);
         if(result.affectedRows>0){
             res.write({code:200,msg:"评论成功"});
         }else{
             res.write({code:301,msg:"评论失败"});
         }
     })
})
module.exports=router;