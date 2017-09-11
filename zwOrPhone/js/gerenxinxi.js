$(document).on("click", "header a", function() {
	window.history.back();
})

//设置数据
$("[type='file']").change(function(e) {
	var form = new FormData();
	form.append("file", document.querySelector("[type='file']").files[0]);
	form.append("token", localStorage.getItem("token"));
	$.ajax({
		type: "post",
		url: Window.preurl + "/setHeadImage",
		async: true,
		data: form,
		processData: false, //必须写
		contentType: false, //必须写
		success: function(result) {
			setImg(result);
		}
	})
})
//添加图片
function setImg(result) {
	var img = '<img src="' + result.headImage + '" alt="" />';
	$(".img").append(img);
}

//点击保存跳转个人中心页
$(document).on("click", ".leep", function() {
	$.ajax({
		type: "post",
		url: Window.preurl + "/setPerson",
		async: true,
		data: JSON.stringify({
			token: localStorage.getItem("token"),
			name: $(".name").val(),
			gender: $(".gender").val(),
			address: $(".address").val()
		}),
		contentType: "application/json",
		success: function(data) {
			alert("已修改！");
			location.href = "personal-center.html";
		}
	})

})
//渲染图像和名字

function render() {
	var use = JSON.parse(localStorage.getItem("user"));
	if(use.headImage) {
		$(".img img").attr("src", use.headImage);
	} else {
		$(".img img").attr("src", "img/gr_06.png");
	}
	$(".name").val(use.name);
	$(".gender").val(use.gender);
	$(".address").val(use.address);
}

render();

//$.ajax({
//		type:"post",
//		url:Window.preurl+"/getPerson",
//		async:true,
//		data:JSON.stringify({token:localStorage.getItem("token")}),
//		contentType:"application/json",
//		success:function(result){
////			setName(result.result);
////			setGen(result.result);
////			setAdd(result.result);
//			setImage(result.result);
//		}
//})
//设置图片
//		function setImage(result){
//			if(result[0].headImage){
//				$(".img img").attr("src",result[0].headImage);
//			}
//			$(".name").val(result[0].name);
//			$(".gender").val(result[0].gender);
//			$(".address").val(result[0].address);
//		}
////设置名字
//		function setName(result){
//			$(".name").val(result[0].name);
//		}
////设置性别
//		function setGen(result){
//			$(".gender").val(result[0].gender);
//		}
////设置收货地址
//		function setAdd(result){
//			$(".address").val(result[0].address);
//		}