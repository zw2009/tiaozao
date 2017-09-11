if(localStorage.getItem("token")) {
	$.ajax({
		type: "post",
		url: Window.preurl + "/getPerson",
		async: true,
		contentType: "application/json",
		data: JSON.stringify({
			token: localStorage.getItem("token")
		}),
		success: function(data) {
			setImg(data.result);
			setName(data.result);
			localStorage.setItem("user", JSON.stringify(data.result[0]));
		}
	})
} else {
	location.href = "login.html";
}

function setImg(result) {
	if(result[0].headImage) {
		var img = '<img src="' + result[0].headImage + '"/>';
		$(".img").append(img);
	} else {
		var img = '<img src="img/gr_06.png"/>';
		$(".img").append(img);
	}

}

function setName(result) {
	$('.name').html(result[0].name);
}

//注销点击功能
$(document).on("click touchstart", ".cancel", function() {
	alert("您确定注销吗？")
	localStorage.removeItem("token");
	location.href = "login.html";
	if(localStorage.removeItem("token")) {
		location.href = "login.html";
	}
})
//对个人中心进行点击
$(document).on("click", ".myCent", function() {
	if(localStorage.getItem("token")) {
		location.href = "personal-center.html";
	}
})