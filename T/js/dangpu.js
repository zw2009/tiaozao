$(document).on("click", ".qh a", function() {
	$(this).css({ "background": "#d6f5ff", "color": "#33ccff" });
	$(this).siblings().css({ "background": "#33ccff", "color": "#fff" });
	$(".content").eq($(this).index()).show();
	$(".content").eq($(this).index()).siblings(".content").hide();
})

dataproduct();

function dataproduct(productName) {
	$.ajax({
		type: "post",
		url: preurl + "/productList",
		contentType: "application/json",
		data: JSON.stringify({
			token: localStorage.getItem("token"),
			productName: productName,
		}),
		success: function(data) {
			setproduct(data.result);
		}
	});
}

$(document).on("click", ".goods", function(e) {
	location.href = "xiangqing.html?id=" + $(this).data("id");

})

function setproduct(result) {
	$(".content").html("");
	for(var i = 0; i < result.length; i++) {
		var content = '<div class="goods" data-id="' + result[i].id + '">' +
			'<img src="' + result[i].Image + '" style="width:2rem;height: 2rem;"/>' +
			'<ul>' +
			'<li class="l_one">' + result[i].Name + '</li>' +
			'<li class="l_two">' + result[i].Carriage + '<i>' + result[i].Destination + '</i></li>' +
			'<li class="l_three">' + result[i].Status + '</li>' +
			'<li class="l_four">￥' +
			'<i>' + result[i].CurPrice + '</i>' +
			'<strong>￥' + result[i].OldPrice + '</strong>' +
			'</li>' +
			'</ul>' +
			'</div>';

		if(result[i].IsBook == 0) {
			$("#boks").append(content);
		} else {
			$("#books").append(content);
		}
	}
}

$(document).on("focus", ".searchback", function() {
	$(this).css({
		background: "#000000",
		position: "fixed",
		top: "0",
		left: "0",
		height: "100%",
		opacity: "0.9",
		zIndex:2
	});
	$(".searchback .search input").css('margin-left', "0.1rem");
})

$(document).on("blur", ".searchback", function() {
	$(this).css({ background: "#eeeeee", position: "relative", height: "0.88rem", opacity: "1" });
	var productName = $(".input").val();
	dataproduct(productName);
})