'use strict';
$(function() {
    //验证号和密码的切换
    $(".log").eq(0).addClass("h");
    $(".register").eq(0).show();
    $(".log").on("click", function() {
            var i = $(this).index();
            $(".log").eq(i).addClass("h").siblings(".log").removeClass("h");
            $(".register").eq(i).show().siblings(".register").hide();
        })
        //password和text的切换
    $(".eye").eq(0).show();
    $(".eye").on("click", function() {
            var inp = $(this).parent().siblings(".phone").children("input");
            var val = inp.val();
            if ($(".eye").index($(this)) == 0) {
                $(this).hide();
                $(this).siblings(".eye").show();
                $(".eye").parent().siblings(".phone").html("<input value='" + val + "' type='password' placeholder='请输入密码'>")
            } else {
                $(this).hide();
                $(this).siblings(".eye").show();
                $(".eye").parent().siblings(".phone").html("<input value='" + val + "' type='text' placeholder='请输入密码'>")

            }
        })
        //手机号的验证
    var status = 0;
    var sj = /^1[34578]\d{9}$/; //手机号
    $("body").on("input", ".phone input", function() {
        $(this).parent().siblings(".btn").children(".shut").show()

        var phone = $(".number").val();
        if (phone != "" && sj.test(phone)) {
            $(".gain").removeAttr("disabled", true);
            $(".gain").css({
                "color": " #666666",
                "border": "1px solid #cacaca"
            });
            status = 1;
        } else {
            $(".gain").attr("disabled", true)
        }
    })
    $("body").on("blur", ".phone input", function() { 	 
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
        //短信验证码
    var time = 60;
    var nume = '';
    var sta = 0
    $("body").on("click", ".gain", function() {
//		nume = '';
            if (status == 1 && sta == 0) {
                sta = 1;
                var set = setInterval(function() {
                    if (time > 0) {
                        time--;
                        $(".gain").css({
                            "color": " #b6b6b6",
                            "border": "1px solid #ffffff"
                        });
                        $(".gain").val(time + "s后重试");
                        $(".numb").attr("placeholder", "6位短信验证码");
                    } else {
                        clearInterval(set);
                        sta = 0;
                        $(".gain").css({
                            "color": " #666666",
                            "border": "1px solid #cacaca"
                        });
                        $(".gain").val("获取验证码");
                        $(".numb").attr("placeholder", "请输入验证码")
                    }
                }, 1000)
				time = 60;
                $(".numb").removeAttr("disabled");
                for (var i = 0; i < 6; i++) {
                    nume += Math.round(Math.random() * 9)
                };
                alert(nume);

            } else {
                $(".numb").attr("disabled", true);
            }
        })
        //log-in登录键的判断
    $("body").on("input", ".numb", function() {
        $(".log-in").removeAttr("disabled", true);
        $(".log-in").css({
            "background": "#ffd161"
        })

    });
    //手机号的快捷登录的判断
    var degree = 0;
    $(".log-in").on("click", function() {
            if ($(".numb").val() == nume) {
                location.href = "Meituan-home-page.html"
                nume = '';
            } else {
                degree++;
                $(".cover").fadeIn().fadeOut(3000);
                if (degree == 4) {
                    $(".cover").text("动态码输入错误,请重新获取")
                    nume = '';
                }
				nume = '';
            }

        })
        //其他方式的显现
    $(".circle").eq(0).show();
    $(".circle").on("click", function() {
        if ($(".circle").index($(this)) == 0) {
            $(this).hide();
            $(this).siblings(".circle").show();
            $(".wire").stop(true).animate({
                "margin": "150px 8.6% 0 8.6%"
            });
            $(".rests").show(1000);
        } else {
            $(this).hide();
            $(this).siblings(".circle").show();
            $(".wire").stop(true).animate({
                "margin": "240px 8.6% 0 8.6%"
            });
            $(".rests").hide();
        }
    })
    $("body").on("input", ".cryptogram", function() {
        $(".log-in-two").removeAttr("disabled", true);
        $(".log-in-two").css({
            "background": "#ffd161"
        })

    });

	var loginIn = 0;
    var uName, uPwd;
    $(".log-in-two").click(function() {
        uName = $(".account").val();
        uPwd = $(".cryptogram").val();
        if (uName !== "" && uPwd !== "") {
            for (var i = 0; i < user.length; i++) {
                if (uName == user[i].userName) {
                    if (uPwd == user[i].userPwd) {
						loginIn = 1;
                        location.href = "Meituan-home-page.html";
                        break;
                    } else {
						loginIn = 0;
						$(".cover").fadeIn().fadeOut(3000);
                        $(".cover").text("账号或密码错误，请重新输入");
                    }
                } else {
					loginIn = 0;
                    $(".cover").fadeIn().fadeOut(3000);
                    $(".cover").text("账号或密码错误，请重新输入");
                }
            }
        }
    });
    var user = [{
        nickName: '二狗子',
        userName: 'doge',
        userPwd: '123',
        status: false
    }, {
        nickName: '小明',
        userName: 'xiaoming',
        userPwd: '123',
        status: false
    }, {
        nickName: '小红',
        userName: 'xiaohong',
        userPwd: '123',
        status: false
    }];
})