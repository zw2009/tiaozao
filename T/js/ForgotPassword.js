			var i;
			var T;
			var sms=document.querySelector("[name='sms']");
			var qq=document.querySelector(".identifying");
			var gg=document.querySelector(".gg");
			var phone=document.querySelector("[name='phone']");
			var pass=document.querySelector("[name='password']");
			var tj=document.querySelector(".tj");
			var CaptureNum=0;
			function isphone(){
				var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
				if(!hasphone){
					alert("此手机号有误");
				}
				return hasphone;
			}
			function ispass(){
				var haspass= /^[0-9a-zA-Z]+$/.test(pass.value);
				if(!haspass){
					alert("此密码有误");
				}
				return haspass;
			}
			document.querySelector(".tj").addEventListener("click",function(){
					if(isphone()&&ispass()){
						if(sms.value==CaptureNum){
							submit()
						}
						else{
							alert("验证码有误")
						}					
				}
			})
			
			//短信验证接口
			function messInter(code,mobile){
				$.ajax({
					type:"get",
					url:"http://smsapi.api51.cn/code/?code="+code+"&mobile="+mobile,
					async:true,
					contentType:"application/json",
					beforeSend: function(request) {
                         request.setRequestHeader("Authorization", "APPCODE 7b72d29ce70e43c28d5618d4e6070048");
                  	},
					success:function(result){
						console.log(result);
					}
				});			
			}
			
			function submit(){
				var xhr=new XMLHttpRequest;
				xhr.open(
					"post",
					 preurl+"/changepwd"
				);
				xhr.setRequestHeader("Content-Type","application/json");
				 var content={
			        	phone:phone.value,	
			        	denNum:sms.value,
			        	password:hex_md5(pass.value)
			        }			        
			        xhr.send(JSON.stringify(content));		        
			        xhr.onreadystatechange=function(){
			        	if(xhr.status==200&&xhr.readyState==4){
			        		if(JSON.parse(xhr.response).isChange==true){
			        			alert("修改成功");
			        			location.href="denglu.html";
			        		}
			        			
			        	}       	
			        } 
			}

			qq.addEventListener("click",function(){
				if(!isphone()){					
					return;
				}
				T=setInterval(ds,1000);
				i=10;
				CaptureNum=Math.floor(Math.random()*10000);				
				messInter(CaptureNum,phone.value);				
			})
			function ds(){
				if(i>0){
					i=i-1;
					qq.style.background="#969696";
					tj.style.background="#969696";	
					tj.disabled=true;
				}
				else{
					i="发送验证码";
					qq.style.background="#FA6C62";
					tj.style.background="#33CCFF";
					clearInterval(T);
					tj.disabled=false;
				}
				qq.innerHTML=i;
			}

			$(document).on("click touchstart","header p",function(){
				history.back()
			})
