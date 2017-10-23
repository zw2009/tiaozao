	var user=JSON.parse(localStorage.getItem("user"));
				if(user.headImage){
					$(".img_1").attr("src",user.headImage);
					$(".name").val(user.name);
					$("[name='xingbie']").val(user.gender);
					$("[name='dizhi']").val(user.address);
				}
				else{
					$(".img_1").attr("src","img/head.png");
				}

$(document).on("change",".install p .file",function(file){
		var form=new FormData();
		form.append("file",document.querySelector("[type='file']").files[0]);
		form.append("token",localStorage.getItem("token"));
	$.ajax({
		type:"post", 
		url:preurl+"/setHeadImage",
		async:true,
		data:form,
		contentType:false,
		processData:false,
		success:function(data){
			setHeadImage(data);
		}
	})
})
function setHeadImage(result){
				if(result.headImage){
					$(".img_1").attr("src",result.headImage);
				}
				else{
					$(".img_1").attr("src","img/head.png");
				}
	}

$(document).on("click touchstart","[type='button']",function(){
	$.ajax({
		type:"post", 
		url:preurl+"/setPerson",
		async:true,
		data:JSON.stringify({token:localStorage.getItem("token"),name:$(".name").val(),gender:$("[name='xingbie']").val(),address:$("[name='dizhi']").val()}),
		contentType:"application/json",
		success:function(data){
			location.href="personal.html";
		}
	})	
})




















$(document).on("click touchstart","header p",function(){
	history.back();
})