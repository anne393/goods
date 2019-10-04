<template>
    <div>
        <!-- 头部图片 -->
        <header>
			<img src="../assets/img/shop/head.png"/>
		</header>
        <!-- 导航条 -->
        <div class="main">
             <ul>
                 <li><img src="../assets/img/shop/logo.png" alt=""></li>
                 <li><router-link to="/" exact>首页</router-link></li>
                 <li @mouseover="isShow1=!isShow1" @mouseout="isShow1=!isShow1"><router-link to="/" >
                     黑莓系列
                     </router-link>
                     <my-pop :img-list="popImg1" v-show="isShow1"></my-pop>
                     </li>
                 <li @mouseover="isShow2=!isShow2" @mouseout="isShow2=!isShow2"><router-link to="/" >
                     蓝莓系列
                     </router-link>
                     <my-pop :img-list="popImg2" v-show="isShow2"></my-pop>
                     </li>
                 <li><router-link to="/mycenter">个人中心</router-link></li>
                 <li><router-link to="/myshop">我的订单</router-link></li>
                 <li><router-link to="/about">关于我们</router-link></li>
                 <li>
                     <router-link to="/login" v-show="!isLogin">登录</router-link>
                     <span v-show="isLogin"><span>{{userName}}</span><span @click="back">退出</span></span>
                 </li>
                 <li>
                     <div @click="showMycart" class="my-cart">我的购物车</div>
                     <my-cart v-show="isShow" @closefn="showMycart"></my-cart>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
import MyPop from "./pop"
import MyCart from "./cart"
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return{
            userName:"",
            isLogin:false,
            isShow1:false,
           
            popImg1:[
                {pic:require("../assets/img/shop/product2.png"),name:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:1930},
                {pic:require("../assets/img/shop/product3.png"),name:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:1930},
                {pic:require("../assets/img/shop/product4.png"),name:"畅心体验装【金色纪念款-瓶装】 60瓶/箱*2箱",price:3120},
                {pic:require("../assets/img/shop/product5.png"),name:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:1930}
            ],
            isShow2:false,
            popImg2:[
                {pic:require("../assets/img/shop/product6.png"),name:"蓝莓酒小饮套装 2瓶装",price:796},
                {pic:require("../assets/img/shop/product7.png"),name:"蓝莓酒畅饮套装 6瓶装",price:2388},
               
            ]
             
        }
    },
     components:{
          MyPop,
          MyCart
     },
     created(){
        if(this.$local.getLocal("user").login){
            this.isLogin = true;
            this.userName = this.$local.getLocal("user").userName;
             
        }else{
            this.isLogin = false;
        }
        console.log("用户名",this.userName);
     },
     watch:{
        $route(){
            this.isLogin = this.$local.getLocal("user").login;
            this.userName = this.$local.getLocal("user").userName;
        }
     },
     computed:{
          ...mapState(["isShow"])
     },
     methods:{
         back(){
            this.$local.del("user");
            this.isLogin=false;
            this.$router.back(); 
            // console.log("用户名",this.userName);
         },
         showMycart(){
             //如果没有登录，就先登录 才能查看购物车
              if(!this.$local.getLocal("user").userName){
                alert("请先登录");
                this.$router.push("/login")
				return;
			}
            this.$store.dispatch("popCartAction");
         },
     }
}
</script>

<style>
 /* 头部图片 */
   header{
        width: 100%;
    }
    header img{
        width: 100%;
    }
    .main{
        width: 100%;
        height: 80px;
        font-size: 14px;
        box-shadow: 0 3px 3px 0 rgba(180,180,180,0.30);
        position: relative;
    }
    .main ul{
        width: 80%;
        margin: 0 auto;
    }
    .main ul li:first-child{
        width: 15%;
    }
    .main ul li{
        float: left;
        line-height: 80px;
        padding: 0px 2%;

    }
    .f-shop{
        width: 150px;
        text-align: center;
    }
    .f-shop img{
        display: none;
        width: 100%;
    }
    .main ul li:nth-child(8),.main ul li:nth-child(9){
        padding: 0px;
    }
    .main ul li:last-child{
        margin-left: 20px;
    }
    .my-cart{
        cursor: pointer;
    }
</style>
