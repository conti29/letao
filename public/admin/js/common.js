//开启进度条
//关闭进度条

$(document).ajaxStart(function(){
    console.log( "ajax请求开始" );
    NProgress.start();
})

$(document).ajaxStop(function(){
    console.log( "ajax请求结束" );
setInterval(function(){
    NProgress.done();
},500)

})