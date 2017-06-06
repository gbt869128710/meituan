'use strict';
$(function() {
   
        //password和text的切换
    $(".star").eq(0).show();
    $(".star").on("click", function() {
            if ($(".star").index($(this)) == 0) {
                $(this).hide();
                $(this).siblings(".star").show();
                $(".collect").text("已收藏")
            } else {
                $(this).hide();
                $(this).siblings(".star").show();
                $(".collect").text("收藏")

            }
        })
    var w_h=$(window).height();
	var h_h=$(".header").height();
	var c_h=$(".content-header").height();
	$(".content").css({"height":w_h - h_h - c_h});
})