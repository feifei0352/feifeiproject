<template>
    <div id="main">
    <div id="top">
    </div>
        <div id="contain">
            <p>游戏</p>
            <div id="wow" class="games"><span>《魔兽世界》</span></div>
            <div id="sc2" class="games"><span>《星际争霸2》</span></div>
            <div id="diable" class="games"><span>《暗黑破坏神》</span></div>
            <div id="ow" class="games"><span>《守望先锋》</span></div>
            <div id="legend" class="games"><span>《炉石传说》</span></div>
            <div id="hots" class="games"><span>《风暴英雄》</span></div>
            <div id="war3" class="games"><span>《魔兽争霸3》</span></div>
            <div id="sc" class="games"><span>《星际争霸》</span></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             
        }
    }
}
</script>
<style scoped>
    body{margin:0!important}
    #top{
        height:100px;
        width:100%;
    }
    *{text-align:left}
    #main{
        width:100%;
        height:1000px;
        background-image:url('http://127.0.0.1:3000/img/default.jpg');
        background-position:center -90px;
        }
      #contain{
        width:1100px !important;
        height:800px;
        margin:0 auto !important;
      }
      p{
          color:#fff;
          margin-top:45px;
      }
      .games{
          width:208px;
          height:280px;
          display: block;
          border:1px solid #000;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.15);
          margin:0 30px 20px 30px;
          float:left;
        }
        .games:hover{
            filter:brightness(1.3);
        }
        #wow{
            background:url('http://127.0.0.1:3000/img/community-card-wow.jpg')no-repeat center 0/100%;
        }
        #sc2{background:url('http://127.0.0.1:3000/img/community-card-sc2.jpg')no-repeat center 0/100%;
        }
        #legend{background:url('http://127.0.0.1:3000/img/legend.png')no-repeat center 0/100%;
        }
        #ow{background:url('http://127.0.0.1:3000/img/ow.jpg')no-repeat center 0/100%;
        }
        #diable{background:url('http://127.0.0.1:3000/img/diable.jpg')no-repeat center 0/100%;
        }
        #hots{background:url('http://127.0.0.1:3000/img/hots.jpg')no-repeat center 0/100%;
        }
        #war3{background:url('http://127.0.0.1:3000/img/war3.jpg')no-repeat center 0/100%;
        }
        #sc{background:url('http://127.0.0.1:3000/img/sc.jpg')no-repeat center 0/100%;
        }
      div>span{
          width:100%;
          height:40px;
          display:block;
          color:#fff;
          font-size:1.1rem;
          margin-top:230px;
      }
</style>