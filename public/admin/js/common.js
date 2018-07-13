//开启进度条
//关闭进度条

$(document).ajaxStart(function(){
    
    NProgress.start();
});



$(document).ajaxStop(function(){
setTimeout(function(){
    NProgress.done();
},500);

});


//二级菜单显示与隐藏
$(".jibie").prev().on("click",function(){
    $(this).next().stop().slideToggle();
})

$(".hidden_aslide").on("click",function(){
    $(".lt_aside").toggleClass("active");
    $(".view").toggleClass("active");
})


//退出功能
//模态框的显示与隐藏
$(".show_modal").on("click",function(){
$('#logoutModal').modal('show');
})

//向后台发送请求退出
$("#modal_out").on("click",function(){
    $.ajax({
        type:"get",
        url:"/employee/employeeLogout",
        success:function(info){
           if(info.success){
               location.href = "login.html";
           }
        }

    })
})