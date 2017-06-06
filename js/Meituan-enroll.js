'use strict';
$(function() {
    //同意的勾的显现
    var statu = 0;
    $(".circle").on("click", function() {
            if ($(".circle").index($(this)) == 0) {

                $(this).hide();
                $(this).siblings(".circle").show();
                statu = 1;
                $(".log-in-one").attr("disabled", true);
                $(".log-in-one").css({
                    "background": "#ffe9b1"
                });
            } else {
                $(this).hide();
                $(this).siblings(".circle").show();
                statu = 0;
                if (statu == 0) {
                    var phone = $(".number").val();
                    if (phone != "" && sj.test(phone)) {
                        $(".log-in-one").removeAttr("disabled", true);
                        $(".log-in-one").css({
                            "background": "#ffd161"
                        });
                    }
                }
            }
        })
        //手机号的验证
    var status = 0;
    var sj = /^1[34578]\d{9}$/; //手机号
    $("body").on("input", ".phone input", function() {
        $(this).parent().siblings(".btn").children(".shut").show()

        var phone = $(".number").val();
        if (phone != "" && sj.test(phone)) {
            if (statu == 0) {
                $(".log-in-one").removeAttr("disabled", true);
                $(".log-in-one").css({
                    "background": "#ffd161"
                });
                status = 1;
            }
        } else {
            $(".log-in-one").attr("disabled", true);
            $(".log-in-one").css({
                "background": "#ffe9b1"
            });
            status = 0;
        }
    })
    $("body").on("change", ".phone input", function() {
        $(this).parent().siblings(".btn").children(".shut").hide()

    })
    $("body").on("click", ".phone input", function() {
        var vals = $(this).val();
        if (vals != '') {
            $(this).parent().siblings(".btn").children(".shut").show()
        }
    })
    $(".shut").on("click", function() {
        $(this).parent().siblings(".phone").children("input").val("");
        $(this).hide();
    })

    //短信验证

    var time = 60;
    var nume = '';
    var sta = 0
    $(".num").eq(0).addClass("h");
    $(".register").eq(0).show();

    $("body").on("click", ".log-in-one", function() {
        if (status == 1 && sta == 0) {
            sta = 1;
            $(".num").eq(1).addClass("h").siblings(".num").removeClass("h");
            $(".register").eq(1).show().siblings(".register").hide();
            times();
        }
    })

    $("body").on("click", ".gain", function() {
            times();
        })
        //倒计时方法
    function times() {
        nume = '';
        var set = setInterval(function() {
            if (time > 0) {
                time--;
                $(".gain").css({
                    "color": " #b6b6b6",
                    "border": "1px solid #ffffff"
                });
                $(".gain").attr("disabled");
                $(".gain").val(time + "s后重试");
            } else {
                clearInterval(set);
                sta = 0;
                $(".gain").css({
                    "color": " #666666",
                    "border": "1px solid #cacaca"
                });
                $(".gain").removeAttr("disabled");
                $(".gain").val("获取验证码");
            }
        }, 1000)
        time = 60;
        for (var i = 0; i < 6; i++) {
            nume += Math.round(Math.random() * 9)
        };
        alert(nume);
    }
    //输入验证码
    $("body").on("input", ".numb", function() {
            $(".log-in-two").removeAttr("disabled", true);
            $(".log-in-two").css({
                "background": "#ffd161"
            });
        })
        //提交验证码
    var degree = 0;
    $(".log-in-two").on("click", function() {
            if ($(".numb").val() == nume) {
                $(".num").eq(2).addClass("h").siblings(".num").removeClass("h");
                $(".register").eq(2).show().siblings(".register").hide();

            } else {
                degree++;
                $(".cover").fadeIn().fadeOut(3000);
                if (degree == 4) {
                    $(".cover").text("动态码输入错误,请重新获取")
                    nume = '';
                }
                $(".log-in-two").attr("disabled", true);
                $(".log-in-two").css({
                    "background": "#ffe9b1"
                });
            }
            nume = '';
        })
        //判断密码的长度
    var cd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,24}$/;
    $(".cryptogram").on("blur", function() {
            var val = $(".cryptogram").val();
            if (val != "" && cd.test(val)) {
            } else {
				$(".log-in-two").attr("disabled", true);
                $(".cover").text("密码长度最少为6位,且要是数字和字符组成").fadeIn().fadeOut(3000);
            }
        })
        //判断密码一致
    $("body").on("input", ".account", function() {
        if ($(".cryptogram").val() != "" && $(".account").val() != "") {
            $(".log-in-three").css({
                "background": "#ffd161"
            });
        } else {
            $(".log-in-two").css({
                "background": "#ffe9b1"
            });
        }
    })
    $("body").on("blur", ".account", function() {
        if ($(".cryptogram").val() != ""&&cd.test($(".cryptogram").val()) && $(".account").val() != "") {
            if ($(".cryptogram").val() == $(".account").val()) {
                $(".log-in-three").removeAttr("disabled", true);
                
            } else {
				$(".log-in-two").attr("disabled", true);
				$(".cover").text("密码长度不一致,请重新输入").fadeIn().fadeOut(3000);
			}
        } else {
            
            $(".cover").text("密码不为空").fadeIn().fadeOut(3000);
        }


    })
    $(".log-in-three").on("click", function() {
		if(cd.test($(".cryptogram").val())){
			
		if ($(".cryptogram").val() != "" && $(".account").val() != "") {
            if ($(".cryptogram").val() == $(".account").val()) {
                location.href = "Meituan-home-page.html"
                
            } 
		}
		}
    })
})