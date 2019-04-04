<template>
     <div id="main">
        <div id="contain">
            <table></table>
            <h1><a href="#"></a> 综合讨论区</h1>
            <div class="pgs">
                <a href="javascript:;" class="button"><span class="new_topic"></span>发新帖</a>
                <div class="pg">
                    <a href="#" class="prev">上一页</a>
                    <a href="#" class="selected">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">...9</a>
                    <input type="text" v-model="pno" />
                    <span>／9页</span>
                    <a href="#" class="next">下一页</a>
                </div>
                <div class="clear"></div>
            </div>
            <div class="thead">
                <div id="title">标题</div>
                <div id="author">作者</div>
                <div id="reply">回复</div>
                <div id="watch">查看</div>
                <div id="last">最后发表</div>
            </div>
            <ul class="forum_list">
                <li v-for="item of forumlist">
                    <div class="title"><img src="http://127.0.0.1:3000/img/folder_common.png" alt="">{{item.title}}</div>
                    <div class="author">{{item.uname}}</div>
                    <div class="reply">回复</div>
                    <div class="watch">{{item.clicks}}</div>
                    <div class="last">{{item.time}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            forumlist:[],
            pno:1
        }
    },
    created(){
        this.axios.get(`http://127.0.0.1:3000/post/getforumlist?game=1&type=1&pno=2`)
        .then(res=>{
            console.log(res.data);
            this.forumlist=res.data;
        })
    }
}
</script>
<style scoped> 
 body{margin:0;padding:0;}
      #nav{height:100px;width:100%;}
      #main{
          width:100%;
          height:1000px;
          background-image:url('http://127.0.0.1:3000/img/sc_bg.jpg');
          background-position: center -200px;
      }
      #contain{
          width:1400px !important;
          margin:0  auto;
      }
      #contain>h1{
          color:#fff;
          height:50px;
          line-height: 50px;
          font-size:30px;
          font-weight: 500;
          text-align:left;
          margin:50px 0 40px 0;
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
          text-decoration: none;
          font-size: 16px;
          font-weight:800;
      }
     span.new_topic{
         display:inline-block;
         position:relative;
         top:5px;
         width:24px;
         height:24px;
         background-image:url('http://127.0.0.1:3000/img/sprite.png');
         background-position: -48px -168px;
     }
     a.button{float:left;}
     .pg{
         width:500px;
         float:right;margin-top:7px;}
     .pg>a{
         display:inline-block;
         width:32px;
         height:24px;
         line-height:24px;
         background: rgba(255,255,255,0.1);
         color: rgba(255,255,255,0.5);
         text-decoration: none;
         margin-right:5px;
         vertical-align:bottom; 
         text-align: center;     
    }
    a.selected,.pg>a.selected:hover{
        background:#f8b700;
        color:#000;
    }
    .pg>a:hover{
        background:rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.8);
    }
     a.prev,a.next{
         width:66px;
     }
     .pg>input{
         width:25px;
         height:18px;
         text-align: center;
     }
     .pg>span{
         color:rgba(255,255,255,0.5);
         margin-left:5px;
         letter-spacing:3px;
     }
     .clear{
         clear:both;
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
     #title{
         width:720px;
         height:60px;
         line-height:60px;
         text-align:left;
         margin-left:40px;
         }
     .title{
         width:760px;
         height:60px;
         line-height:60px;
         text-align:left;
         }
      .thead .title{
          width:750px;
          padding-left:50px;
      }
     #author,.author{
         width:120px;
         height:60px;
         line-height: 60px;
         text-align:left;
     }
     #reply,#watch,.reply,.watch{
         width:80px;
         height:60px;
         line-height: 60px;
     }
     #last,.forum_list>li>div.last{
         width:300px;
         height:60px;
         line-height: 60px;
         float:right;
         text-align: right;
         padding-right:12px;
     }
     .title>img{
       margin-left:25px;
       vertical-align: text-bottom;
       margin-right:15px;
     }
</style>