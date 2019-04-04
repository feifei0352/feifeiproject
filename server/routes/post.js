const express=require("express");
const router=express.Router();
const pool=require("../pool");
//获取帖子
router.get("/getforumlist",(req,res)=>{
  var obj=req.query;
  console.log(obj);
  var sql;
  var arr=[];
  if(obj.fid){
    var $fid=obj.fid;
    sql="SELECT * FROM forum WHERE fid=?";
    arr=[$fid];
  }else{
    var $game=obj.game;
    var $type=obj.type;
    var $pno=obj.pno;
    var $pageSize=obj.pageSize;
    $pno=parseInt($pno);
    $pageSize=10;
    sql="SELECT * FROM forum WHERE game=? & type=? LIMIT ? , ?";
    arr=[$game,$type,$pno,$pageSize];
  }
  pool.query(sql,arr,(err,result)=>{
      if(err){console.log(err);}
      res.writeHead(200,{"Access-Control-Allow-Origin":"*","Content-Type":"text/html; charset=utf-8"});
      res.write(JSON.stringify(result));
      //console.log(JSON.stringify(result));
      res.end();
  })
})
//发帖子
router.post("/sendforum",(req,res)=>{
   var obj=req.body;
   obj.time=parseInt(Date.now()/1000);
   var sql="INSERT INTO forum VALUES (NULL";
   var val = Object.values(obj);
   for(let item of val){
     sql+=`,'${item}'`;
   }
   sql+=');';
   pool.query(sql,[obj],(err,result)=>{
     if(err)console.log(err);
     if(result.affectedRows>0){
       res.send({code:200,msg:"发帖成功"})
     }else{
       res.send({code:301,msg:"发帖失败"})
     }
   })
})
module.exports=router;