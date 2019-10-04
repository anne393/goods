<template>
    <div class="myshop">
          <h3 class="title">我的购物车  </h3>
          <!-- 如果购物车中没有商品  就显示购物车为空的信息 -->
          <div class="empty" v-if="!cartData.length>0">
               <h3>购物车为空</h3>
               <p>您还没有选购任何商品，现在前往选购吧!</p>
               <p style="text-align:center;padding-top:20px;">
                   <img src="../assets/cart-empty.png" alt="">
               </p>
           </div>
           <!-- 如果购物车中有商品  就显示商品信息和结算信息 -->
           <div class="content" v-else>
               <div class="item" style="height:40px;">
                    <span>图&nbsp;&nbsp;片</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>删除</span>
               </div>
               <div class="item" v-for="goods,index in cartData">
                    <span><img :src="goods.pic"/></span>
                    <span>￥{{goods.price}}</span>
                    <span class="gcount">
                         <input type="button" value="-" @click="redNum(index)"/> 
                        <input type="text" v-model="goods.count" />
                         <input type="button" value="+" @click="addNum(index)"/> 
                    </span>
                    <span>￥{{goods.price*goods.count}}</span>
                    <span>X</span>
               </div>           
           </div>
           <!-- 如果购物车中有商品  就显示商品信息和结算信息 -->
           <div class="my-footer" v-if="cartData.length>0">
               <span>商品共件:￥{{totalCount}}</span> <span>总价:￥{{totalPrice}}</span> 
               <span　class="close-shop" @click="closecart">关闭</span>
           </div>
      </div>
</template>

<script>

import "../assets/css/common.css"
import {mapState,mapGetters} from "vuex"
export default {
    data(){
        return{
              idx:0
        }
    },
    computed:{
         ...mapState(["cartData"]),
        ...mapGetters(["totalCount","totalPrice"]),

     },
    methods:{
        closecart(){
            this.$emit("closefn");
        },
        // redNum(idx){
        //     this.$store.dispatch("redCountAction",idx)
        // },
        // addNum(idx){
        //    this.$store.dispatch("addCountAction",idx)
        // }
        redNum(idx){
            this.$store.dispatch("changeNumAction",{flag:1,index:idx})
        },
        addNum(idx){
           this.$store.dispatch("changeNumAction",{flag:2,index:idx})
        }
    }
 
}
</script>

<style>
.myshop{
    font-size: 14px;
    position: absolute;
    top:60px;
    right:250px;
    background: #f8f8f8;
    z-index: 100;
    border-radius: 20px;
    box-shadow: 0px 0px 6px #86D55D;
    width: 480px;
    line-height: 30px;
}
.myshop .title{
    padding: 20px; 
    font-size: 20px;
    color:#666;
}
.myshop .empty{
    padding-left:20px;
    font-size: 16px;
}
.myshop .empty h3,.myshop .empty p{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}
.myshop .empty p:last-child{
    margin-bottom: 20px;
}
.myshop .content{
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
.myshop .content span:first-child{
    display: inline-block;
    width: 60px;
    height: 60px;
}
.myshop .content img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
.myshop .content span{
    padding: 6px;
}
.myshop .content .item{
    padding-bottom: 10px;
    
}
.myshop .my-footer{
    padding: 30px;
}
.myshop .close-shop{
    margin-left: 200px;
    cursor: pointer;
}
.gcount input:nth-child(1),
.gcount input:nth-child(3){
    border: none;
    background: white;
    font-size: 20px;
    cursor: pointer;
}
.gcount input:nth-child(2){
    width: 30px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
}
.gcount b{
    font-size: 20px;
    cursor: pointer;
}
.item span{
    display: inline-block;
    width: 80px;
     text-align: center;
}

.item span:nth-child(3){
    width: 100px;
    display: inline-block;
}
</style>
