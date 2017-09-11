$.ajax({
	type: "post",
	url: Window.preurl + "/getOrder",
	async: true,
	contentType: "application/json",
	data: JSON.stringify({
		token: localStorage.getItem("token")
	}),
	success: function(data) {
		serPro(data.result);
	}
});

////订单渲染
function serPro(result) {
	for(var i = 0; i < result.length; i++) {
		var li = '<li class="cf delet" data-id="' + result[i].id + '">' +
			'<div class="titleList cf"><img src="img/qrd_02.png" alt="" /><p>君宝话费充值<a href=""></a></p><span>交易成功</span></div>' +
			'<div class="productBot">共' + result[i].totalNum + '件商品 合计:<i>' + result[i].totalCost + '</i>(含运费￥<i>0.00</i>)</div>' +
			'<div class="delPro"><p class="delId">删除订单</p><p>评价</p></div>' +
			'</li>';
		$('.product').append(li);

		for(var j = 0; j < result[i].products.length; j++) {
			var child = '<div class="productCen cf">' +
				'<img src="' + result[i].products[j].Image + '" alt="" />' +
				'<p>' + result[i].products[j].Name + '</p>' +
				'<span><i>￥<strong>' + result[i].products[j].CurPrice + '</strong></i>' +
				'<i>￥<strong>' + result[i].products[j].CurPrice + '</strong></i>' +
				'<i>x<strong>' + eval(result[i].productNum)[j] + '</strong></i>' +
				'</span>' +
				'</div>';

			$(".productBot").before(child);
		}
	}
}

//点击跳转详情页
$(document).on('click', '.productCen', function() {
	location.href = 'product-circe.html?id="+$(this).data("id")';
})
//删除订单
$(document).on("click", ".delId", function() {
	$.ajax({
		type: "post",
		url: Window.preurl + "/delOrder",
		async: true,
		contentType: "application/json",
		data: JSON.stringify({
			token: localStorage.getItem("token"),
			orderId: $(".delet").data("id")
		}),
		success: function(data) {
			location.reload();
		}
	})
})