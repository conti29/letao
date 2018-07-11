$(function(){

    $("form").bootstrapValidator({
        fields:{
            username:{
                validators:{
                    //不能为空
                    notEmpty:{
                        message:'用户名不能为空'
                    },

                    //长度校验
                    stringLength:{
                        min:2,
                        max:4,
                        message:'用户名长度必须在2~4位'
                    },

                    callback:{
                        message:'用户名输入不正确'
                    }
                }
            },

            password:{
                validators:{
                    notEmpty:{
                        message:'密码不能为空'
                    },
                     //长度校验
                     stringLength:{
                        min:4,
                        max:6,
                        message:'用户名长度必须在4~6位'
                    },
                    callback:{
                        message:'密码输入不正确'
                    }
                }
            }
        },

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },




        
    });


    $("form").on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑

        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data: $('form').serialize(),
            success:function(info){
                // console.log( info);
                if(info.error === 1000){
                    $("form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
                }

                if(info.error === 1001){
                    
                    $("form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
                }

                if(info.success){
                    location.href = 'index.html';
                }
            }
        })
    });


//重置功能
$("[type = 'reset']").on("click",function(){
    $("form").data('bootstrapValidator').resetForm(true);
})




})