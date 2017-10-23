$(document).on("click","header p",function(){
	history.back();
})


//描述相符
$(document).on("click",".stars i",function(){
	$(this).addClass("cur").prevUntil().addClass("cur");
	if($(this).hasClass("cur")){
		$(this).nextAll().removeClass("cur");
	}
	
	var curNum=$(this).parent().find(".cur").length;
	switch (curNum)
		{
		case 1:
		  $(this).parent().siblings(".good").html('差');;
		  break;
		case 2:
		  $(this).parent().siblings(".good").html("可以");
		  break;
		case 3:
		  $(this).parent().siblings(".good").html('一般');
		  break;
		case 4:
		  $(this).parent().siblings(".good").html('好');
		  break;
		case 5:
		  $(this).parent().siblings(".good").html('很好');
		  break;
		}	
})
//物流服务
$(document).on("click",".logis i",function(){
	$(this).addClass("cur1").prevUntil().addClass("cur1");
	if($(this).hasClass("cur1")){
		$(this).nextAll().removeClass("cur1");
	}
	var cur1=$(".cur1").length;
	switch (cur1)
		{
		case 1:
		  $(".star").html('一星');;
		  break;
		case 2:
		  $(".star").html("二星");
		  break;
		case 3:
		  $(".star").html('三星');
		  break;
		case 4:
		  $(".star").html('四星');
		  break;
		case 5:
		  $(".star").html('五星');
		  break;
		}
})
//服务态度
$(document).on("click",".strot i",function(){
	$(this).addClass("cur2").prevUntil().addClass("cur2");
	if($(this).hasClass("cur2")){
		$(this).nextAll().removeClass("cur2");
	}
	
	var cur=$(".cur2").length;
	switch (cur)
		{
		case 1:
		  $(".strotaa .stsda").html('一星');;
		  break;
		case 2:
		  $(".stsda").html("二星");
		  break;
		case 3:
		  $(".stsda").html('三星');
		  break;
		case 4:
		  $(".stsda").html('四星');
		  break;
		case 5:
		  $(".stsda").html('五星');
		  break;
		}

})
//点击发布
$(document).on("click","header i",function(){
	$.ajax({
		type:"post",
		url:preurl+"/addComment",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			orderId:getQuerystring('orderId'),
			content:$(".evaluate").val(),
			describeScore:$(".good").html() ,
			logisticsScore:$(".star").html() ,
			serviceScore: $(".stsda").html(),
			
		}),
		success:function(data){

			alert("发布成功！")
			location.href="comment.html";
			
			}
	});
})

	
function getQuerystring(name){
				var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
				var r=window.location.search.substr(1).match(reg);
				if(r !=null) return unescape(r[2]);return null;
			}

//缓存的图片描述
var pro=JSON.parse(localStorage.getItem("pro"));
	for(var i=0;i<pro.length;i++){
		for (var j=0;j<pro[i].Image.length;j++) {
		var images='<div class="images">'
		+'<img src="'+pro[i].Image+'" class="shopimg" />'
			+'<p>'
			+'<strong>描述相符</strong>'	
			+'<span class="stars">'	
				+'<i></i>'	
				+'<i></i>'	
				+'<i></i>'
				+'<i></i>'	
				+'<i></i>'	
				+'</span>'
				+'<i class="good"></i>'
			+'</p>'
			+'</div>'
		}
	$(".star_level").append(images);
}

	


	



























