//返回
$(document).on("click",".top_nav p",function(){
	history.back('nuber');
	
})
//渲染足迹

$.ajax({
	type:"post",
	url:preurl+"/getBrowseLog",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		setContent(data.result)
	}
});
//日期里面和产品
function setContent(result){
	for (var i=0;i<result.length;i++) {
	var data='<div class="content_one">'
				+'<h1 class="data">'+result[i].dateTime+'</h1>'
			+'</div>'
		
		$(".content").append(data);

		for (var j=0;j<result[i].browselogs.length;j++) {
			var content_one='<div class="content_small" data-id="'+result[i].browselogs[j].productId+'">'			
					+'<img src="'+result[i].browselogs[j].product[0].Image+'"/>'
					+'<div class="right">'
						+'<p>'+result[i].browselogs[j].product[0].Des+'</p>'
						+'<div class="float">'
							+'<span>￥<i>'+result[i].browselogs[j].product[0].CurPrice+'</i></span>'
							+'<span>看相似</span>'
							+'<em></em>'
						+'</div>'							
					+'</div>'
				+'</div>'
				$(".data").eq(i).after(content_one);
		}	
		
	}
}

//清空所有订单
$(document).on("click",".delet",function(){
		$.ajax({
		type:"post",
		url:preurl+"/delBrowseLog",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token:localStorage.getItem("token")}),
		success:function(data){
			location.reload();
			alert("足迹已清空！");
			
		}
	})
})


//点击加入购物车
$(document).on("click",".float em",function(e){
	
	if(localStorage.getItem("token")){
		$.ajax({
			type: "post",
			url: preurl + "/addShopCar",
			async: true,
			contentType: "application/json",
			data: JSON.stringify({ id: $(this).parents(".content_small").data("id"), token: localStorage.getItem("token") }),
			success: function(data) {
				location.href = "shopcar.html";
			}
		})
		
	} else {
		alert('请登录');
		location.href = "denglu.html";
	}
	e.stopPropagation();
})

//点击跳详情
$(document).on("click",".content_small",function(){
	location.href="xiangqing.html?id="+$(this).data('id');
})












