
//定义电话和密码的name路径
var phone=document.querySelector("[name='phoneNum']");
var pass=document.querySelector("[name='password']");	
			
function validate(){
	var phone=document.querySelector("[name='phoneNum']").value;  
  	var isphone=/^1([3578]\d{9}|4\d{9})$/.test(phone);  //电话正则表达式	
  	//邮箱的正则表达式
    var ispem=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(phone);
    if(!isphone&&!ispem){
     	alert('您输入的手机号/邮箱有误');
    }
    return isphone || ispem;
    }   
//通过函数来提交验证登陆的数据	
function submit(){
	var xhr=new XMLHttpRequest;		        	
	xhr.open(
		"POST",
		Window.preurl+"/login"
		); 
	xhr.setRequestHeader("Content-Type","application/json");
		var content={
		phone:phone.value,        	
		password:hex_md5(pass.value)
		}			        
	xhr.send(JSON.stringify(content));		        
	xhr.onreadystatechange=function(){
		
		if(xhr.status==200&&xhr.readyState==4){
			if(JSON.parse(xhr.response).islogin==true){
			localStorage.setItem('token',JSON.parse(xhr.response).token);
			alert("登陆成功！");
			location.href="personal-center.html";
		} else{
			alert("请注册！")
		}
		}
	 }     
}	
	//对登陆进行事件监听	
    var login=document.querySelector(".button");
    login.addEventListener("click",function(){
        if(validate()){               
        	submit();
        }
    })