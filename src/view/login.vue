<template>
    <div>
        <form class="form-horizontal" @submit.prevent="send">
		  <div class="form-group g-return">
		    <div class="col-sm-2 col-sm-offset-8 col-xs-2 col-xs-offset-8">
		     <router-link to="/">返回首页</router-link>
		    </div>
		  </div>
		  <div class="form-group g-logo">
		    <div class="col-sm-2 col-sm-offset-5 col-xs-2 col-xs-offset-5">
		      <img src="../assets/img/login/logo.jpg"/>
		      <!--<h1>悠果维</h1>-->
		    </div>
		  </div>
		  <div class="form-group g-login">
		    <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
		      <span><img src="../assets/img/login/user.gif"/></span><input type="text" ref="username"  id="user" placeholder="请输入登录账号" />
		    </div>
		  </div>
		  <div class="form-group g-login">
		    <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
		      <span><img src="../assets/img/login/pwd.gif"/></span><input type="password" ref="pwd" id="pwd" placeholder="请输入登录密码" />
		    </div>
		  </div>
		  <div class="form-group g-forget">
		    <div class="col-sm-2 col-sm-offset-6 col-xs-2 col-xs-offset-6">
		      <a href="index.html">忘记密码？</a>
		    </div>
		  </div>
		  <div class="form-group g-btn">
		    <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
		      <input type="submit" class="btn btn-default m-login" value="登录" />
		    </div>
		  </div>
		  <div class="form-group g-btn">
		    <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
		      <input type="button" class="btn btn-default m-reg" value="注册" />
		    </div>
		  </div>
		  
		</form>
		<div class="err">
			<div class="ico">
				!
			</div>
			<span class="msg">请输入登录密码</span>
		</div>
    </div>
</template>

<script>

export default {
    methods:{
        
        send(){
            let that = this;
            let uname = this.$refs.username.value;
            let upass = this.$refs.pwd.value;
            if(!uname||!upass){
                alert("请输入用户名或密码");
                return
            }
            this.$axios.post(`/api/users/login`, {
                uname,
                upass
            })
            .then(function (res) {
                console.log(res);
                alert(res.data.message);
                if(res.data.errorNo==0){
                   
                    that.$local.save("user",{
                    login:true,
                    userName:uname
                })
                that.$router.back();
                }else{
                    alert(res.data.message);
                    return;
                }
            })
            .catch(function (error) {
                console.log(error);
            });

            //获取表单提交的信息
            
            // alert(uName+"-----"+uName)
           
            //在哪个页面点击登录，登陆后就回到哪个页面
            
        }
    }
}
</script>

<style>
    .g-return{
    text-align: right;
    margin-top: 20px;
}
.g-return a{
        color: #44B25F;
    }
.g-logo img{
        width: 70%;
    }
.g-logo h1{
        margin-top: 1%;
        white-space: 3px;
        font-size: 25px;
        text-align: center;
    }
.g-login input{
        width: 100%;
        border: none;
        padding-left: 80px;
        padding: 3% 8%;
        background-color: transparent;
        border-bottom: 1px solid #CACBCF;
        position: relative;
    }
.g-login span{
        position: absolute;
        left: 4%;
        top: 30%;
        z-index: 99; 
    }
.g-login span img{
            width: 50%;
        }
.g-forget{
    text-align: right;
   
}
.g-forget a{
        
        color: #bbb;
    }
    .g-btn:nth-child(7){
        margin-bottom: 50px;
    }
.g-btn input{
        width: 100%;
        border-radius: 5px;
        padding: 2% 8%;
        /* margin-top: 1%; */
    }
   .g-btn .m-login{
        background-color: #78C052;
        color: #FFFFFF;
    }
   .g-btn .m-reg{
        margin-top: 1%;
        color: #85B772;
        border: 1px solid #85B772;
    }
.g-chat{
    margin-top: 10%;
   
}
.g-chat img{
        width: 100%;
    }
.err{
    position: absolute;
    left: 40%;
    top: 40%;
    padding: 3% 2% 5% 2%;
    background-color: rgba(0,0,0,0.7);
    border-radius: 5px;
    color: #FFFFFF;
    transform: scale(0);
   
}
.err .ico{
        margin: 5px auto;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #F63631;
        color: rgba(0,0,0,0.5);
        text-align: center;
        line-height: 20px;
    }
</style>
