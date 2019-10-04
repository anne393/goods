import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/view/detail'
import Index from '@/view/index'
import NotFound from '@/components/notfound'
import About from '@/view/about'
import Login from '@/view/login'
import About1 from '@/components/about/About1'
import About2 from '@/components/about/About2'
import About3 from '@/components/about/About3'
import MyCenter from '@/view/mycenter'
import MyShop from '@/view/myshop'
Vue.use(Router)

let router = new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mycenter',
      name: 'MyCenter',
      component: MyCenter,
       meta:{
              login:true
          }
    },
    {
      path: '/myshop',
      name: 'MyShop',
      component: MyShop,
       meta:{
              login:true
          }
    },
    {
     path: '/about',
      name: 'About',
      component: About,
      children:[
           {
              path: '',
              component: About1,
              meta:{
                index:0
              }
            },

            {
              path: 'two',
              component: About2,
              meta:{
                index:1
              }
            },
            {
              path: 'three',
              component: About3,
              meta:{
                index:2
              }
            },
      ]
          
      
    },
    //  {
    //  path:'*',
    //   redirect:(to)=>{
    //     console.log("to:",to)
    //     if(to.path=="/aaa"){
    //       return "/"
    //     }else if(to.path=="/bbb"){
    //       return "/about"
    //     }else{
    //       return {name:"Index"}
    //     }
    //   }
    // }
  ]
})
//解决报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//全局路由钩子函数
router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    let info= router.app.$local.get("user").userName;
    if(info){
      next();
    }else{
      alert("登录后，才能查看哦~");
      router.push("/login");
    }
  }else{
    next();
  }
})
export default router