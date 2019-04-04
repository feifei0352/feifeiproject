<template>
    <div id="main">
        <div id="contain">
            <table></table>
            <h1><a href="#"></a>帖子标题</h1>
            <div class="pgs">
                <a href="javascript:;" class="button">回复</a>
                <a href="javascript:;" class="button2">返回列表</a>
                <div class="clear"></div>
            </div>
            <div class="floor" v-for="(item,i) of comments">
                 <div class="head">
                     <img src="img/user.jpeg" alt="">
                     <a href="#">{{item.uname}}</a>
                 </div>
                 <div class="middle">
                     <p>{{item.contant}}</p>
                 </div>
                 <div class="foot">
                     <span>{{i+1}}</span>
                     <sup>#</sup>
                     <p>{{item.time}}</p>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           comments:[],
       }
    },
    created(){
            this.axios.get(`http://127.0.0.1:3000/post/getforumlist?fid=1`)
            .then(res=>{
                console.log(res.data);
            }),
             this.axios.get(`http://127.0.0.1:3000/comment/getcomment?fid=1`)
            .then(res=>{
                console.log(res.data);
            })
    },
    methods:{
        /*
        getBbs:function(){
            this.axios.get(`http://127.0.0.1:3000/post/getforumlist?fid=1`)
            .then(res=>{
                console.log(res.data);
            })
        },
        getComment:function(){
            this.axios.get(`http://127.0.0.1/3000/comment/getcomment?fid=1`)
            .then(res=>{
                console.log(res.data);
            })
        }
        */
    }

}
</script>
<style scoped>
      body{margin:0;padding:0;}
      #nav{height:100px;width:100%;}
      a{text-decoration: none;}

      #main{
          width:100%;
          height:1000px;
          background-image:url('http://127.0.0.1:3000/img/sc_bg.jpg');
          background-position: center -200px;
      }
      #contain{
          margin:0 40px 0 60px;
      }
      #contain>h1{
          color:#fff;
          height:50px;
          line-height: 50px;
          text-align:left;
          font-size:30px;
          font-weight: 500;
          margin:50px 0 30px 0;
      }
      #contain>h1>a{
          width:50px;
          height:50px;
          display:block;
          float:left;
          margin-right:10px;
          background-image:url('http://127.0.0.1:3000/img/logo-sc2.png');
          background-repeat:no-repeat;
          background-size: 50px;
      }
      #contain .button{
          display:block;
          width:140px;
          height:36px;
          background:#ffc729;
          color:#000;
          text-align: center;
          line-height: 36px;
          font-size: 16px;
          font-weight:800;
      }
     a.button{float:left;} 
     .clear{
         clear:both;
     }
     .pgs{
         margin-bottom:26px;
     }
     .thead{
         width:100%;
         height:60px;
         background:rgba(0,0,0,0.2);
         margin-top:25px;
         border-top:1px solid rgba(255,255,255,0.2);
         border-bottom:1px solid rgba(255,255,255,0.2);
     }
     .thead>div,.forum_list>li>div{float:left;color:rgba(255,255,255,0.7);padding:0;}
     .forum_list{
         list-style: none;
         padding:0;
         margin:0;
     }
     .forum_list>li{
         width:100%;
         height:60px;
         border-bottom:1px solid rgba(255,255,255,0.2);
        
     }
     .title{
         width:800px;
         height:60px;
         line-height:60px;
        
         }
      .thead .title{
          width:750px;
          padding-left:50px;
      }
     .author{
         width:150px;
         height:60px;
         line-height: 60px;
     }
     .reply,.watch{
         width:80px;
         height:60px;
         line-height: 60px;
     }
     .last{
         width:300px;
         height:60px;
         line-height: 60px;
         float:right;
         text-align: right;
     }
     .title>img{
       margin-left:25px;
       vertical-align: text-bottom;
       margin-right:15px;
     }
     .button2{
         display:block;
         width:80px;
         height:24px;
         line-height: 24px;
         color:rgba(255,255,255,.5);
         background:rgba(255,255,255,.1);
         text-align:center;
         font-size:0.9rem;
         float:right;
         transition:all 0.5s;
     }
     .button2:hover{
         background:rgba(255,255,255,.3);
         color:rgba(255,255,255,.8)
     }
     .floor{
         width:100%;
         min-height:150px;
         border-top:1px solid rgba(255,255,255,.2);
         border-bottom:1px solid rgba(255,255,255,.2);
     }
     .head{
         height:110px;
         width:240px;
         float:left;
         padding:25px 0 0 0;
     }
     .head>img{
         height:78px;
         width:78px;
         border:1px solid #000;
         vertical-align: top;
         float:left;
     }
     .head>a{
         color:rgba(255,255,255,.5);
         margin-left:13px;
         float:left;
     }
     .middle{
         width:940px;
         height:150px;
         float:left;
         padding:25px 0 0 25px;
     }
     .middle>p{
         margin:0;
         color:rgba(255,255,255,.9);
         line-height:1.8rem;
         text-align:left;
     }
     .foot{
         color:rgba(255,255,255,.8);
         width:138px;
         height:150px;
         float:right;
     }
     .foot>span{
         margin-left:100px;
     }
     .foot>p{
         font-size:.8rem;
         margin-top:0;
     }
</style>