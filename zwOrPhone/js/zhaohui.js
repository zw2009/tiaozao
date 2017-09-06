//点击返回箭头回到历史
$(document).on("click touchstart","header a",function(){
	window.history.back();
})

var butt=document.querySelector(".buttom");
var timer=document.querySelector("#timer");
var mess=document.querySelector("[name='Message']");
var messp=document.querySelector("#timer p");
var phone=document.querySelector("[name='phone']");			
var pass=document.querySelector("[name='password']");
var correct=document.querySelector(".correct");
			
//手机号和密码的正则表达式函数
function valiP(){
	var isphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
	var ispass= /^[0-9a-zA-Z]+$/.test(pass.value);
	if(!isphone){
		alert("手机号有误！")
	}
	if(!ispass){
		alert("密码有误！")
	}
	return isphone&&ispass;
}
//通过ajax发起请求
function submit(){
	var xhr=new XMLHttpRequest;		        	
	xhr.open(
		"POST",
		Window.preurl+"/changepwd"
		); 
	xhr.setRequestHeader("Content-Type","application/json");
	var content={
		phone:phone.value,			        	
		password:hex_md5(pass.value)
	 }			        
	xhr.send(JSON.stringify(content));		        
	xhr.onreadystatechange=function(){
	if(xhr.status==200&&xhr.readyState==4){
		alert(xhr.response);  	
		}       	
	}     
}
//发送验证码倒数计时
function time(){              
    if(i>0){  
         i=i-1;  //倒数计时
        messp.innerHTML = i + "秒";  //里面的内容是i+它的秒数
        messp.style.background="#a9a9aa";
         butt.style.background="#a9a9aa";
         butt.disabled=true;
    }
    else{
       	messp.style.background="red";
        butt.style.background="#33ccff";
       	messp.innerHTML = "发送验证码";
        clearInterval(T);    //方法的参数必须是由 setInterval() 返回的 ID 值。
        //清楚定时器重置定时
        butt.disabled=false;
     }
} 
	var T;
	var i;
	
timer.addEventListener("click",function(){ 
    if(valiP()){
    i=10;  //设置规定时间
    T=setInterval("time()",1000);   //调用time的函数进行毫秒计数，
    //方法可按照指定的周期（以毫秒计）来调用函数或计算表达式                	
    }
})	

//对提交进行事件监听
butt.addEventListener("click",function(){
	if(valiP()){
	if(mess.value=="123"){
		submit();		
		}		
	}
})
mess.addEventListener("blur",function(){
    if(mess.value=="123"){
        correct.style.display="block"
		messp.style.display="none";
		messp.style.background="red";
        butt.style.background="33ccff";
    }    
    else{
        messp.style.display="block"
		correct.style.display="none";
	}
})












