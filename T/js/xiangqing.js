//添加足迹
$.ajax({
	type:"post",
	url:preurl+"/addBrowseLog",
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token"),productId:getQueryString("id")}),
	success:function(data){
		
	}
	
})








$.ajax({
		type:"post",
		url:preurl+"/productDetail",
		contentType:"application/json",
		data:JSON.stringify({id:getQuerystring("id")}),
		success:function(data){
			setproduct(data.result);
			setbanner(data.result);
			localStorage.setItem("shop","["+JSON.stringify(data.result)+"]");
		}
});
			
			function getQuerystring(name){
				var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
				var r=window.location.search.substr(1).match(reg);
				if(r !=null) return unescape(r[2]);return null;
			}

			function setbanner(result){
				$(".banner img").attr("src",result.product.Image);
			}



function setproduct(result){
	var nr='<div class="content">'
					+'<div class="textbook">'
						+'<span>'+result.product.Name+'</span>'
						+'<p>'
						+'￥<i>'+result.product.CurPrice+'</i>'
							+'<strong>'+result.product.OldPrice+'</strong>'
							+'<a>'+result.product.Status+'</a>'
						+'</p>'
						+'<div class="kd">'
							+'<i>快递'+result.product.Carriage+'</i>'
							+'<a>'+result.product.Destination+'</a>'
						+'</div>'
					+'</div>'
					+'<div class="baby">'
						+'<h1><i></i>宝贝描述</h1>'
						+'<p>'+result.product.Des+'</p>'
					+'</div>'
				 +'</div>';
				 
				$(".content").html(nr);
				 
}




$(document).on("click",".banner a",function(e){
				$(this).siblings().css("background","none").css("border","0.01rem solid #9e9e9e");
				$(this).css("background","#33CCFF").css("border","0.01rem solid #33ccff");
				
			})
document.querySelector("header p").addEventListener("click",function(){
				history.back()
			})
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

$(document).on("click",".shopcar",function(e){
	
	if(localStorage.getItem("token")){
		$.ajax({
			type: "post",
			url: preurl + "/addShopCar",
			async: true,
			contentType: "application/json",
			data: JSON.stringify({ id: getQueryString("id"), token: localStorage.getItem("token") }),
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


$(document).on("click",".shoping p",function(){
	if(localStorage.getItem("token")){
		location.href="order_form.html";
	}
	else{
		alert("请登录");
		location.href="denglu.html";
	}
})


var user=JSON.parse(localStorage.getItem("user"));


$(".phone em").html(user.name);
$(".phone i").html(user.phone);

	//yaoyin添加
	//收藏功能
	var token=localStorage.getItem("token");
	var lovedata;
	//获取收藏数据
	$.ajax({			
		type:"post",
		url:preurl+"/getIsCollection",
		async:true,
		contentType:'application/JSON',
		data:JSON.stringify({
			productId: getQuerystring("id"), 
			token: token
		}),
		success:function(data,status){
			console.log(data);//获取收藏数据
			lovedata=data;
			red();
		}
	})
	
	//判断--收藏为红，未收藏为白
	var red=function(){
		if (lovedata.isCollection==false) {
			$('.love').removeClass('love_1');
		} else{
			$('.love').addClass('love_1');
		}
	}
	
	//判断是否收藏
	var collect=function(){
		if ($('.love').hasClass('love_1')) {
			$('.love').removeClass('love_1');
		} else{
			$('.love').addClass('love_1');
		}
		
		if (lovedata.isCollection==false) {
			$.ajax({			
					type:"post",
					url:preurl+"/addCollectionLog",
					async:true,
					contentType:'application/JSON',
					data:JSON.stringify({
						productId: getQuerystring("id"), 
						token: token
					}),
					success:function(data,status){
						console.log(data);//添加收藏数据				
				    } 
			})
		}
		else{
			$.ajax({			
				type:"post",
				url:preurl+"/delCollectionLog",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					productId: getQuerystring("id"), 
					token: token
				}),
				success:function(data,status){
					console.log(data);//取消收藏数据				
				}
			})
		}
	}

	
	//调用
	$(document).on("click",".love",function(){
		if(localStorage.getItem("token")){
			collect();	
		}
		else{
			alert("请登录");
			location.href="denglu.html";
		}		
	})
		








