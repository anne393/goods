import Vue from "vue"
import Vuex from 'vuex'
import {goodslist,imgList} from '../datas/list'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        goodslist,//商品数据
        imgList,
        cartData:[],//购物车数据 
        isShow:false,  
    },
    mutations:{
        //1 添加到购物车
       addCart(state,data){//data:要添加的商品
        // 添加到购物车   如果购物车中有该商品  就增加数量   如果没有就添加进购物车
           let addGoods=true;
           state.cartData.forEach((goods)=>{//遍历购物车 ，如果要添加的商品存在，就增加数量
               if(goods.id == data.id){
                   goods.count++;
                   addGoods=false;
               }
           })
            if(addGoods){
                let goodsData = data;
                Vue.set(goodsData,"count",1);//count:增加一条数量记录  初始值为1  vue中，人为的给对象增加一个属性
                state.cartData.push(goodsData);//将要添加的商品追加到购物车中
            }
       },
        //改变购物车数量  data：是传来的一个{flag:1,index:idx}的对象
        //flag=1，减少，当数量<1时，删除该商品     flag=2  增加
        changeNum(state,data){
            if(data.flag == 1){
                 state.cartData[data.index].count--;
                 if(state.cartData[data.index].count<1){
                    state.cartData.splice(data.index,1);
                 }
            }
            else if(data.flag == 2){
                state.cartData[data.index].count++;
            }
        },
        popCart(state){
            state.isShow = !state.isShow;
        },
        closePop(state){
            if(state.isShow){
                state.isShow = false;
            }
        }
    },
    actions:{
       addCartAction(context,data){
           context.commit("addCart",data);
       },
        changeNumAction(context,data){
           context.commit("changeNum",data);
        },
        popCartAction(context){
           context.commit("popCart");
        },
         closePopAction(context){
           context.commit("closePop");
        }
        
    },
    getters:{
        totalCount(state){
            let tCount=0;
            for(let i=0;i<state.cartData.length;i++){
                let goods = state.cartData[i];
                tCount += goods.count
            }
            return tCount;
        },
        totalPrice(state){
            let tPrice=0;
            for(let i=0;i<state.cartData.length;i++){
                let goods = state.cartData[i];
                tPrice += goods.price*goods.count
            }
            return tPrice;
        }
    }
   
})
export default store