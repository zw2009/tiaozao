var user = JSON.parse(localStorage.getItem("user"));
$.ajax({
	type: "post",
	url: preurl + "/getComment",
	data: JSON.stringify({ "token": localStorage.getItem("token") }),
	contentType: "application/json",
	success: function(data) {
		setresult(data);
	}
});

if (!user) {
	user={};
}

$(".circle").attr("src", user.headImage);

$(".user").html(user.name);

function setresult(data) {
	for(var i = 0; i < data.length; i++) {
		var d = new Date(data[i].updatedAt)
		var time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
		var li = '<li class="all_list">' +
			'<div class="user_information">' +
			'<img class="circle" src="' + user.headImage + '" />' +
			'<span class="user">' + user.name + '</span>' +
			'</div>' +
			'<div class="color">' +
			'<p>' + time + '</p>' +
			'<p>' + data[i].content + '</p>' +
			'</div>' +
			'<div class="product">' +
			'</div>' +
			'<div class="number">' +
			'<button class="write_btn">写追评</button>' +
			'</div>' +
			'</li>';
			
		$(".all").append(li);

		for(var j = 0; j < data[i].order.products.length; j++) {
			var information = '<div class="information">' +
				'<img src="' + data[i].order.products[j].Image + '" />' +
				'<div>' +
				'<p>' + data[i].order.products[j].Des + '</p>' +
				'<p>￥' + data[i].order.products[j].CurPrice + '</p>' +
				'</div>' +
				'</div>';
			$(".all_list .product").eq(i).append(information);
		}
		
		
		
	}

}

$(document).on("click", ".write_btn", function() {
	location.href = "evaluate.html";
})

$(document).on("click", "header p", function() {
	history.back();
})