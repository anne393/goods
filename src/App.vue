<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header'
import "./assets/css/common.css"
import "./assets/css/inputCheckbox.css"
import myFooter from './components/footer'
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter
  },
 
  // methods:{
  //   reload(){
  //      this.$router.go(0);
  //   }
  // }
}
</script>

<style>

a:link{
  color: black;
  text-decoration: none;
}
a:visited{
  color: black;
  text-decoration: none;
}
a:hover{
  color: green;
  text-decoration: none;
  cursor: pointer
}
a:active{
  color: green;
  text-decoration: none;
  cursor: pointer
}
a:focus{  
color: green;
}

</style>
