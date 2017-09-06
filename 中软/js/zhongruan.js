$(document).on("click", ".menuList li", function() {
	$(".menuList li").removeClass("cur");
	$(this).toggleClass("cur");
	$(".disblock").hide();
	$(this).children(".disblock").show();

})

$(document).on("click", ".proList li", function() {
	$(".listPro").css("display", "block");
})

$(document).on("click", ".listPro span", function() {
	$(this).addClass("cru").siblings().removeClass("cru");
	$(this).css("color", "#018DD6").siblings().css("color", "#000")
})

//点击移动有阴影
//$(document).on("mouseenter ",".centeRig li",function(){
//	$(".centeRig li").stop().animate({"bottom": '0px'}).css({'box-shadow':"none"});
//	 $(this).stop().animate({"bottom": '+10px'}).css({'box-shadow':"1px 8px 10px #e7e7e7"});
//})
//
//$(document).on("mouseenter ",".teachLis li",function(){
//	$(".teachLis li").stop().animate({"bottom": '0px'}).css({'box-shadow':"none"});
//	 $(this).stop().animate({"bottom": '+10px'}).css({'box-shadow':"1px 8px 10px #e7e7e7"});
//})

//banner切换
var id = 0;
var length = $(".mousov a").length;
$(document).on("click", ".mousov a", function() {
	var index = $(".mousov a").index(this);
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".forImg img").eq(index).show().siblings("img").hide();
	id = index;
})

var a = setTimeout("check()", 1500);

function check() {
	$(".mousov a").eq(id).trigger("click");
	id = (id + 1) % length;
	a = setTimeout("check()", 1500);
}

//对banner上面的列表里面的图标进行点击事件

/*	$(".forImg img").mouseover(function(){
		clearTimeout(a);
	})
	$(".forImg img").mouseout(function(){
		setTimeout("check()",1500);
	})*/