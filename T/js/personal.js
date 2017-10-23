if(localStorage.getItem("token")) {
	$.ajax({
		type: "post",
		url: preurl + "/getPerson",
		data: JSON.stringify({ "token": localStorage.getItem("token") }),
		contentType: "application/json",
		success: function(data) {
			setHeadImage(data.result);
			localStorage.setItem("user", JSON.stringify(data.result[0]));
		}
	});
} else {
	location.href = "denglu.html"
}

$(document).on("click", "header p", function() {
	history.back();
})

$(document).on("click", ".headportrait", function() {
	location.href = "installpersonal.html";
})

function setHeadImage(result) {
	if(result[0].headImage != null) {
		$(".headportrait").attr("src", result[0].headImage);
		$(".banner .stro").html(result[0].name);
		$("[name='xingbie']").val(result[0].gender);
		$("[name='dizhi']").val(result[0].address);
	} else {
		$(".headportrait").attr("src", "img/head.png");
	}
}

$(document).on("click", "header i", function() {
	localStorage.removeItem("token");
	location.href = "denglu.html";

})

$(document).on("click", ".p_one", function() {
	location.href = "order_list.html";
})

$(document).on("click", ".my span", function(e) {
	location.href = "my_order.html?id=" + $(this).data("id");
})



	//yaoyin添加--收藏功能
	var token=localStorage.getItem("token");
	//渲染
	var coll_num=function(){
		$.ajax({			
			type:"post",
			url:preurl+"/getCollectionLog",
			async:true,
			contentType:'application/JSON',
			data:JSON.stringify({
				token: token
			}),
			success:function(data,status){
				$('.collection i').text(data.result.length);
			}
		})
	}
	coll_num();
		
	$(document).on("click",".collection",function(){
		location.href="collection.html";
	})

$(document).on("click", ".p_three", function() {
	location.href = "comment.html";
})


//跳转我的足迹
$(document).on("click",".footj",function(){
	location.href="footprint.html";
})





$.ajax({
	type:"post",
	url:preurl+"/getBrowseLog",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		nuber(data.result)
	}
});

function nuber(result){
	var browselen=0;
	if(!result.length){
		$(".footj i").html(0);
	}else{		
		for(var i=0,len=result.length;i<len;i++){
			browselen=browselen+result[i].browselogs.length;
		}
		$(".footj i").html(browselen);
	}	
}


