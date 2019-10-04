let local={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    getLocal(key){
        return JSON.parse(localStorage.getItem(key))||{}; 
    },
    del(key){
        localStorage.removeItem(key);
    }
}
export default{
    //导出自定义插件
    install:function(vm){
        vm.prototype.$local=local;
    }
}