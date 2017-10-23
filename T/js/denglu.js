var phone=document.querySelector("[name='phoneNum']");
			var cipher=document.querySelector("[name='password']");
			function DL(){
				var isPhoneNum=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
				var isEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(phone.value);
				if(!isPhoneNum&&!isEmail){
					alert("你输入的手机号/邮箱不正确");
				}
				return isPhoneNum||isEmail;
			}
			
			
			function submit(){
				var xhr=new XMLHttpRequest;
				xhr.open(
					"post",
					 preurl+"/login"
				);
				xhr.setRequestHeader("content-Type","application/json");
				var content={
					phone:phone.value,
					password:hex_md5(cipher.value)
				}
				xhr.send(JSON.stringify(content));
				xhr.onreadystatechange=function(){
					if(xhr.status==200&&xhr.readyState==4){
						if(JSON.parse(xhr.response).islogin==true){
						alert("登录成功");
						localStorage.setItem("token",JSON.parse(xhr.response).token)
						location.href="personal.html";
						}
						else{
							alert('登陆失败');
						}
						
					}
				}
			}
			
			document.querySelector(".one").addEventListener("click",function(){
				if(DL()){
					submit();
				}
				
			})