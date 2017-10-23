var i = getQueryString("id");

$(".order li").eq(i).addClass("cur").siblings().removeClass("cur");

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

$(document).on("click", ".order li", function() {
	$(this).addClass("cur").siblings().removeClass("cur");
})

$(document).on("click", "header p", function() {
	history.back();
})