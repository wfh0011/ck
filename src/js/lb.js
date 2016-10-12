$(function(){
	var $ct = $(".content");
				
		$ct.on("mouseenter","li",function(){
			$(this).addClass("active")
		}).on("mouseleave","li",function(){
			$(this).removeClass("active")  
		})
		
		//ajax请求json文件
		var nnxz = getcookie("nxz");
		
		if(nnxz == 170){
			$.ajaxSetup({
			type:"get",
			url:"../js/new_file.json",
			async:true,
			success:function(res){
				//console.log(res);
						
			$.each(res, function(idx,item) {
				var $a = $("<a/>").attr("href",item.url);	
				//	console.log(item.url);
				var $li = $("<li/>");
				var $p = $("<p/>");
				var $sp = $("<span/>");
				var $img = $("<img/>").attr("src",item.imgurl);
				$p.html(item.pag);
				$sp.html(item.price);
				$li.append($img).append($p).append($sp);
				$li.appendTo($a);
				$a.appendTo($ct);
							
				$li.click(function(){
					var $src = $(this).find("img").attr("src");
					var $pbq = $(this).find("p").html();
					var $jg = $(this).find("span").html();
					console.log($jg)
					//console.log($src);
					var d = new Date();
					d.setDate(d.getDate()+10);
					var src = setcookie("src",$src,d);
					var pbj = setcookie("pbq",$pbq,d);
					var jg = setcookie("jg",$jg,d);
				})
			});
		}
	});
	$.ajax();
		
		//滚动事件实现懒加载
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
					
		if(scrolltop>=$(document).height()-$(window).height()-100){
			$.ajax();
		}
	})
		}

	
	
	
	if(nnxz == 150){
		$.ajaxSetup({
			type:"get",
			url:"../js/xz.json",
			async:true,
			success:function(res){
				//console.log(res);
						
			$.each(res, function(idx,item) {
				var $a = $("<a/>").attr("href",item.url);	
				//	console.log(item.url);
				var $li = $("<li/>");
				var $p = $("<p/>");
				var $sp = $("<span/>");
				var $img = $("<img/>").attr("src",item.imgurl);
				$p.html(item.pag);
				$sp.html(item.price);
				$li.append($img).append($p).append($sp);
				$li.appendTo($a);
				$a.appendTo($ct);
							
				$li.click(function(){
					var $src = $(this).find("img").attr("src");
					var $pbq = $(this).find("p").html();
					var $jg = $(this).find("span").html();
					console.log($jg)
					//console.log($src);
					var d = new Date();
					d.setDate(d.getDate()+10);
					var src = setcookie("src",$src,d);
					var pbj = setcookie("pbq",$pbq,d);
					var jg = setcookie("jg",$jg,d);
				})
			});
		}
	});
	$.ajax();
		
		//滚动事件实现懒加载
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
					
		if(scrolltop>=$(document).height()-$(window).height()-100){
			$.ajax();
		}
	})
	};
	
	if(nnxz == 140 ){
		$.ajaxSetup({
			type:"get",
			url:"../js/yf.json",
			async:true,
			success:function(res){
				//console.log(res);
						
			$.each(res, function(idx,item) {
				var $a = $("<a/>").attr("href",item.url);	
				//	console.log(item.url);
				var $li = $("<li/>");
				var $p = $("<p/>");
				var $sp = $("<span/>");
				var $img = $("<img/>").attr("src",item.imgurl);
				
				$p.html(item.pag);
				$sp.html(item.price);
				$li.append($img).append($p).append($sp);
				$li.appendTo($a);
				$a.appendTo($ct);
							
				$li.click(function(){
					var $src = $(this).find("img").attr("src");
					var $pbq = $(this).find("p").html();
					var $jg = $(this).find("span").html();
					console.log($jg)
					//console.log($src);
					var d = new Date();
					d.setDate(d.getDate()+10);
					var src = setcookie("src",$src,d);
					var pbj = setcookie("pbq",$pbq,d);
					var jg = setcookie("jg",$jg,d);
				})
			});
		}
	});
	$.ajax();
		
		//滚动事件实现懒加载
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
					
		if(scrolltop>=$(document).height()-$(window).height()-100){
			$.ajax();
		}
	})
	}
	
	
	if(nnxz == 160 ){
		$.ajaxSetup({
			type:"get",
			url:"../js/bb.json",
			async:true,
			success:function(res){
				//console.log(res);
						
			$.each(res, function(idx,item) {
				var $a = $("<a/>").attr("href",item.url);	
				//	console.log(item.url);
				var $li = $("<li/>");
				var $p = $("<p/>");
				var $sp = $("<span/>");
				var $img = $("<img/>").attr({"src":item.imgurl,"width":"200"});
				$p.html(item.pag);
				$sp.html(item.price);
				$li.append($img).append($p).append($sp);
				$li.appendTo($a);
				$a.appendTo($ct);
							
				$li.click(function(){
					var $src = $(this).find("img").attr("src");
					var $pbq = $(this).find("p").html();
					var $jg = $(this).find("span").html();
					console.log($jg)
					//console.log($src);
					var d = new Date();
					d.setDate(d.getDate()+10);
					var src = setcookie("src",$src,d);
					var pbj = setcookie("pbq",$pbq,d);
					var jg = setcookie("jg",$jg,d);
				})
			});
		}
	});
	$.ajax();
		
		//滚动事件实现懒加载
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
					
		if(scrolltop>=$(document).height()-$(window).height()-100){
			$.ajax();
		}
	})
	}
	
	
	
	
})