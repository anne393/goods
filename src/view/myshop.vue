<template>
    <div class="container myshop2" id="app">
         <table >
             <thead>
             <tr>
                 <th><input type="checkbox" class="mgc mgc-success"/>全选</th>
                 <th>商品信息</th>
                 <th>单价</th>
                 <th>数量</th>
                 <th>金额</th>
                 <th>操作</th>
             </tr>
             </thead>
             <tbody>

                 <tr v-for="item,index in goodsList">
                     <td><input type="checkbox" class="mgc mgc-success"  :value="item"/></td>
                     <td><img :src="item.pic"/>{{item.name}}</td>
                     <td>￥{{item.price}}</td>
                     <td>
                         <span>-</span>
                         <input type="text" v-model="item.num" />
                         <span>+</span>
                     </td>
                     <td>￥{{item.price*item.num}}</td>
                     <td><span class="delBtn glyphicon glyphicon-trash"></span></td>
                 </tr>
             </tbody>
         </table>
          <div class="ffooter">
              <p>
                  <a href="#">继续购物</a>|
                  <a href="#">清空购物车</a>
              </p>
              <p>已选商品:<span>0</span>件,
                  总金额:<span>0</span>元
                  <input type="button" value="下单结算">
              </p>
          </div>
      </div>
</template>

<script>
import goodsList from "../datas/list.js"
export default {
   data(){
    
        return{
            goodsList
        }
    },
 
  
}
</script>

<style>
.myshop2.container{
    padding-top: 100px;
    font-size: 14px;
}
.myshop2 table{
    width: 100%;
}

.myshop2 tr th{
    text-align: center;
}
.myshop2 tr td{
    text-align: center;
    padding-top: 50px;
}
.myshop2 tr input[type=checkbox]{
    margin-right: 30px;
}

.myshop2 tr th:nth-child(2){
    width: 50%;
}
.myshop2 tr td:nth-child(2){
    width: 50%;
    text-align: left;
}
.myshop2 tr td:nth-child(2) img{
    width: 20%;
    margin-right: 20px;
}
.myshop2 tr td:nth-child(4) span{
    font-size: 18px;
    cursor: pointer;
}
.myshop2 tr td:nth-child(4) input{
    width: 20%;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-size: 16px;
}
.myshop2 tr td:nth-child(5){
    font-weight: bold;
    color: red;
}
.myshop2 .ffooter{
    height: 100px;
    /* border: 1px solid #44B25F; */
    margin-top: 50px;
    line-height: 60px;
}
.myshop2 .ffooter p:first-child{
     float: left;
 }
.myshop2 .ffooter p:first-child a{
    font-size: 14px;
    color: black;
    padding: 0px 20px;
}
.myshop2 .ffooter p:last-child{
    float: right;
    font-size: 14px;
}
.myshop2 .ffooter p:last-child input{
    width: 180px;
    height: 60px;
    background-color: #86D55D;
    color: white;
    border: none;
    font-size: 24px;
    margin-left: 20px;
}
.myshop2 .ffooter p:last-child span{
    font-size: 24px;
    color: red;
    margin: 10px;
}
</style>
