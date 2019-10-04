<template>
  <div class="container">
     <!-- 嵌套路由 -->
      <router-link to="/about">公司介绍</router-link> <!-- 第一个让它在页面一打开，就存在 -->
      <router-link to="/about/two">新闻资讯</router-link>
      <router-link to="/about/three">产品资讯</router-link>
      <div> <input type="button" value="返回" @click="back"/></div>
      <div class="content-slide">
          <transition mode="out-in" :name="direction1">    
            <keep-alive>
               <router-view></router-view>
            </keep-alive>
          </transition>  
      </div>
      
     
  </div>
</template>

<script>

export default {
       data(){
           return{
               direction1:"left"
           }
       },
       watch:{
           $route(to,from){
                if(to.meta.index<from.meta.index){
                    this.direction1="right";
                }else{
                    this.direction1="left";
                }
           }
       },
       methods:{
           back(){
                this.$router.back();
            //    this.$router.go(-2);
           }
       }
}
</script>

<style>
 .container{
    padding: 20px 0px;
}
.container a{
    font-size: 20px;
    color: black;
    text-decoration: none;
    margin-right: 50px;
}
    .content-slide{
       padding-top: 50px;
   }  
/* .v-enter{
    opacity: 0;
}
.v-enter-active{
    transition: .5s;
}
.v-enter-to{
     opacity: 1;
}
.v-leave{
    opacity: 1;
}
.v-leave-active{
    transition: .5s;
}
.v-leave-to{
     opacity: 0;
} */
.right-enter{
    transform: translateX(- 100%)
}
.right-enter-to{
    transform: translateX(0px)
}
.right-enter-active{
    transition: 0.5s;
}

.left-enter{
    transform: translateX(100%)
}
.left-enter-to{
    transform: translateX(0px)
}
.left-enter-active{
    transition: 0.5s;
}
</style>
