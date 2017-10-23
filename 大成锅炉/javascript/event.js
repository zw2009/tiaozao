//history 
function history(wrap,arr_l,arr_r,num){
		//event
		var count=0;
		var moveWrap=$("."+wrap+" ul");
		var moveLiWidth=$("."+wrap+" ul li:eq(0)").width();
		var eventScroll={
				chnange:function(){
					moveWrap.find("li").click(function(){
							var nIndex=moveWrap.find("li").index(this);
							$(this).removeClass().addClass("active").siblings().removeClass();
							$("."+wrap+" .history_content").find(".history_box").eq(nIndex).show().siblings().hide();
						})
					$("."+wrap).find(".open").click(function(){
									if($(this).next().is(":hidden")){
										
											$(this).next().show();
											$(this).parent().parent().siblings().find(".open_txt").hide();
											$(this).parent().parent().siblings().find(".open").text("+");
											$(this).text("-");
									}else{
											$(this).next().hide();
											$(this).text("+");
										}
						})
				},
				leftMenu:function(){
						if(!moveWrap.is(":animated")){
						//console.log(count)
								if(moveWrap.find("li").size()<=num) return false;
								if(count<=0){
										moveWrap.css("left",0);
								}else{
										count--;
										moveWrap.animate({"left":"+="+moveLiWidth});
								}
						}
				},
				rightMenu:function(){
						if(!moveWrap.is(":animated")){
						//console.log(count)
								if(moveWrap.find("li").size()<=num) return false;
								if(count>=moveWrap.find("li").size()-num){
										moveWrap.css("left",moveWrap.find("li").size()*moveLiWidth*-1+num*moveLiWidth);
								}else{
										count++;
										moveWrap.animate({"left":"-="+moveLiWidth});
								}
						}
				}
		}
		
		$("."+arr_l).click(function(){
				eventScroll.leftMenu();	
		})
		
		$("."+arr_r).click(function(){
				eventScroll.rightMenu();	
		})
		
		eventScroll.chnange();
		
	}

$(function(){	
		history("history","history_l","history_r",11);
})

$(function(){
  $(".month_list dd:nth-child(6n-5)").addClass("item1")
  $(".month_list dd:nth-child(6n-4)").addClass("item2")
  $(".month_list dd:nth-child(6n-3)").addClass("item3")
  $(".month_list dd:nth-child(6n-2)").addClass("item4")
  $(".month_list dd:nth-child(6n-1)").addClass("item5")
  $(".month_list dd:nth-child(6n)").addClass("item6") 
})
//月份滚动
//scrollBox
function scrollBox2(Wrap,arrow_l,arrow_r,num){
      
	  var $scrollBox_ul = $(Wrap).find("dl"); 
	  var li_width = $scrollBox_ul.find("dd:first").outerWidth(true);
	  var scrollBox_li=$(Wrap).find("dd");
      var index=0;
	  
	  if(scrollBox_li.length>num){
         
		   $(arrow_l).click(function(){
				 if(!$scrollBox_ul.is(":animated")){  
				        
						if(index==0){
 						   return false;
 						 }
						
						if(index<=1){
							
							$(arrow_l).addClass("l_dis_l");//左面灰色	
						 }
						 else
						 {
							$(arrow_r).addClass("l_scrollBox_r").removeClass("l_dis_r");//右面红色  
						 }
						
 						index--;
 												
						$scrollBox_ul.css({marginLeft:-li_width});
						$scrollBox_ul.find("dd:first").before($scrollBox_ul.find("dd:last"))
						$scrollBox_ul.animate({ "marginLeft" : 0+"px" }, 500)
						
				  } 	
		   })
		   
		   $(arrow_r).click(function(){
				  if(!$scrollBox_ul.is(":animated")){ 
				        
						index++;
						
 						if(index>scrollBox_li.length-num){
 						    index=scrollBox_li.length-num;
   						    return false;					
						}
						
						if(index>scrollBox_li.length-num-1)	
						{
							$(arrow_r).addClass("l_dis_r");//右面灰色  
						}
						else
						{
							$(arrow_l).addClass("l_scrollBox_l").removeClass("l_dis_l"); //左面红色	 
						}	
						
 						$scrollBox_ul.animate({ "marginLeft" : -li_width+"px" }, 500 , function(){
						$scrollBox_ul.css({marginLeft:0}).find("dd:first").appendTo($scrollBox_ul); 
						
						})
				  }
		   })
     } 
}

$(function(){
		$(".history_box").each(function(){
			scrollBox2($(this),$(this).find(".l_scrollBox_l"),$(this).find(".l_scrollBox_r"),6)// 外框，左，右，不滚动数量								
		})   
    	
})

