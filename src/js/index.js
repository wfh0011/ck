$(function(){
	//鼠标划入   实现图片淡入淡出效果
	$(".navfoot").on("mouseenter","li",function(){
		$(this).animate({
		"opacity":"0.8"
		},function(){
			$(this).animate({
				"opacity":"1"
			})
		})
	})
	$(".content1").on("mouseenter","img",function(){
		$(this).animate({
		"opacity":"0.8"
		},function(){
			$(this).animate({
				"opacity":"1"
			})
		})
	})
	
	$(".content2").on("mouseenter","img",function(){
		$(this).animate({
		"opacity":"0.8"
		},function(){
			$(this).animate({
				"opacity":"1"
			})
		})
	})
	
	$(".content3").on("mouseenter","img",function(){
		$(this).animate({
		"opacity":"0.8"
		},function(){
			$(this).animate({
				"opacity":"1"
			})
		})
	})
	
	$(".ulist").on("mouseenter","li",function(){
		$(this).animate({
		"opacity":"0.8"
		},function(){
			$(this).animate({
				"opacity":"1"
			})
		})
	})
	
	$(".kehu").on("mouseenter",function(){
		$(".lilist").animate({"height":"90"})
	}).mouseleave(function(){
		$(".lilist").animate({"height":"0"})
	})
	
	//吸顶菜单
	$(window).scroll(function(){
		var $ctop = $(".contenttop");
		var $top = $ctop.offset().top;
		var $dw = $(".dw");
		
		var $scrolltop = $(window).scrollTop();
		
		if($scrolltop >= $top - 100){
			$dw.css("display","block");
			$dw.css({"position":"fixed","top":"0"})
		}else{
			$dw.css("display","none")
		}
	})
	
	//select菜单
	var $select = $(".select");
	var $li = $select.children("li");
	var index;
	var i = 2;
	
		$li.mouseenter(function(){
			i = $(this).index();
			$(".select1").animate({"top":i*30},1);
			
		})
	
		$(".select1").mouseenter(function(){
			$(this).css("display","block");
		})
		
		$li.mouseenter(function(){
			index = $(this).index();
			$li.eq(index).css("background","white");
			$li.eq(index).find("a").css("color","black")
			$(".select1").css("display","block");
			
			$(".select1").mouseenter(function(){
				
				$li.eq(index).css("background","white");
				$li.eq(index).find("a").css("color","black")
			});
			
			$(".select1").mouseleave(function(){
				$(this).css("display","none")
				
			if(index % 2 != 0){
				$li.eq(index).css("background","rgb(70,59,127)")
				$li.eq(index).find("a").css("color","white")
				
			}else{
				$li.eq(index).css("background","rgb(56,47,107)")
				$li.eq(index).find("a").css("color","white")
			}
			});
			
		})
		
		$li.mouseleave(function(){
			index = $(this).index();
			
			if(index % 2 != 0){
				$(this).css("background","rgb(70,59,127)")
				$li.eq(index).find("a").css("color","white")
			}else{
				$(this).css("background","rgb(56,47,107)")
				$li.eq(index).find("a").css("color","white")
			}
			$(".select1").css("display","none");
		})
	
	$li.eq(0).mouseenter(function(){
		$(this).css("background","rgb(56,47,107)");
		$(this).find("a").css("color","white");
		$(".select1").css("display","none");
	})
	
	//楼梯   很烂的楼梯
	var $louti = $(".louti");
	var $nli = $louti.children("li");
	
	var $navfoot = $(".navfoot");
	var $ctop1 = $(".contenttop");
	var $ctop2 = $(".content2top");
	var $ctop3 = $(".content3top");
	var $ctop4 = $(".content4top");
	
	//滚动滚条  楼梯移动
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		
		if(scrolltop > 700){
			$louti.fadeIn();
		}else{
			$louti.fadeOut();
		}
		
		if(scrolltop >= $ctop1.offset().top && scrolltop <= $ctop1.offset().top + 300){
			$nli.eq(1).find("a").addClass("yshi");
			$nli.eq(1).find("a").parent().siblings().find("a").removeClass("yshi");
		}else if(scrolltop >= $ctop2.offset().top && scrolltop <= $ctop2.offset().top + 300){
			$nli.eq(2).find("a").addClass("yshi");
			$nli.eq(2).find("a").parent().siblings().find("a").removeClass("yshi");
		}else if(scrolltop >= $ctop3.offset().top && scrolltop <= $ctop3.offset().top + 300){
			$nli.eq(3).find("a").addClass("yshi");
			$nli.eq(3).find("a").parent().siblings().find("a").removeClass("yshi");
		}else if(scrolltop >= $ctop4.offset().top && scrolltop <= $ctop4.offset().top + 300){
			$nli.eq(4).find("a").addClass("yshi");
			$nli.eq(4).find("a").parent().siblings().find("a").removeClass("yshi");
		}
		
	});
	
	//点击楼层 跳到相应的位置
	$nli.eq(1).click(function(){
		var scrolltop = $ctop1.offset().top;
		$("body").animate({scrollTop:scrolltop});
		$nli.eq(1).find("a").addClass("yshi");
		$nli.eq(1).find("a").parent().siblings().find("a").removeClass("yshi");
	})
	$nli.eq(2).click(function(){
		var scrolltop = $ctop2.offset().top;
		$("body").animate({scrollTop:scrolltop});
		$nli.eq(2).find("a").addClass("yshi");
		$nli.eq(2).find("a").parent().siblings().find("a").removeClass("yshi");
	})
	$nli.eq(3).click(function(){
		var scrolltop = $ctop3.offset().top;
		$("body").animate({scrollTop:scrolltop});
		$nli.eq(3).find("a").addClass("yshi");
		$nli.eq(3).find("a").parent().siblings().find("a").removeClass("yshi");
	})
	$nli.eq(4).click(function(){
		var scrolltop = $ctop4.offset().top;
		$("body").animate({scrollTop:scrolltop});
		$nli.eq(4).find("a").addClass("yshi");
		$nli.eq(4).find("a").parent().siblings().find("a").removeClass("yshi");
	})
	$nli.eq(5).click(function(){
		var scrolltop = 0;
		$("body").animate({scrollTop:scrolltop});
	})
	
	//加载   就是不知道行不行
	
	var $xz = $(".xiezi");
	var $yf = $(".yifu");
	var $yyy = $(".yyy");
	var $bb = $(".bb");
	var $sbi = $(".sbiao");
	var $dabao = $(".dabao");
	var $xibao = $(".ulist").children("li");
	
	$xz.click(function(){
		var oxz = 150;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	});
	
	$yf.click(function(){
		var oxz = 140;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
	
	$yyy.click(function(){
		var oxz = 140;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
	
	$bb.click(function(){
		var oxz = 160;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
	
	$sbi.click(function(){
		var oxz = 170;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
	
	$dabao.click(function(){
		var oxz = 160;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
	
	$xibao.click(function(){
		var oxz = 160;
		
		var d = new Date();
		d.setDate(d.getDate()+10);
		var nxz = setcookie("nxz",oxz,d);
	})
})

//获取登录成功后的用户名
window.onload = function(){
	var zh = getcookie("czhao");
	var ogd = document.getElementById("gd"); 
	console.log(zh);   
	if(zh){
		ogd.innerHTML = zh; 
	}
	
}
