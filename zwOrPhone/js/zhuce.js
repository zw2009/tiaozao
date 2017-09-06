//返回
$(document).on("click touchstart",".top_nav",function(){
	window.history.back();
})
//手机邮箱切换
var code=document.querySelector(".code") ; 
var phone=document.querySelector("[name='phone']");		 		
var email=document.querySelector("[name='email']");	
var pass=document.querySelector("[name='password']");	
var isphone=true; 
code.addEventListener("click",function(e){ 
	e.target.style.borderBottom=".04rem solid #33ccff";
	if(e.target.className=="phoReg"){ 
		phone.style.display="block";   
		email.style.display="none";
		e.target.nextElementSibling.style.borderBottom="none";
		isphone=true;
	}
	else{
		//切换到邮箱注册
		email.style.display="block";
		phone.style.display="none";
		e.target.previousElementSibling.style.borderBottom="none";
		isphone=false;
	}
})
				 
//判断
function valiPhone(){
	var hasPhone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
	if(!hasPhone){
		alert("此手机号有误！");
	}	
	return hasPhone;
}

function valiEmail(){
    var hasEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
	if(!hasEmail){
		alert("此邮箱号有误！");
	}
	return hasEmail;							
}

//ajax提交注册信息
function submit(){
	var xhr=new XMLHttpRequest;		        	
	xhr.open(
	"POST",
	Window.preurl+"/reg"
); 
	xhr.setRequestHeader("Content-Type","application/json");
	var content={
	phone:phone.value,
	email:email.value,			        	
	password:hex_md5(pass.value)
	}			        
	xhr.send(JSON.stringify(content));		        
	xhr.onreadystatechange=function(){
	if(xhr.status==200&&xhr.readyState==4){
		 location.href="login.html";
		}       	
	}     
}

document.querySelector(".register").addEventListener("click",function(){					
	if(isphone){
	if(valiPhone()){
		submit();	
		alert("您已注册成功！");
	}
	}
	else{
		if(valiEmail()){
		submit();
		alert("您已注册成功！");
		}
	}							
})