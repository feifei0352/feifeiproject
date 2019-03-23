const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/getforum",(req,res)=>{
  var fid=req.query.fid;
  var sql="SELECT * FROM forum where fid=?";
  pool.query(sql,[fid],(err,result)=>{
      if(err)console.log(err);
      res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
      res.write(JSON.stringify(result));
      res.end();
  })
})
module.exports=router;