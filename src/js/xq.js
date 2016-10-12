$(function(){
	//获取列表页li的数据
	var nsrc = getcookie("src");
	var npbq = getcookie("pbq");
	var njg = getcookie("jg");
	
	$(".tb").html(npbq);
	$(".dd").html(njg);
	
	var img = $("<img/>").attr("src",nsrc);
	var ctlf = $(".content1_left");
	img.appendTo(ctlf);
	
	//加入购物车效果
	var $jr = $(".jr");
	var i = 0;
	
	$jr.click(function(){
		//获取图片的src
		var $src = $(".content1_left").find("img").attr("src");
		//console.log($src);
		var $wz = $(".tb").html(); 
		var $cd = $(".cd").html();
		var $dd = $(".dd").html();
		var $sl = $(".ip").children("input").eq(1).val();
		//console.log($cd);
		console.log($dd);
		
		//存入cookie
		var d = new Date();
		d.setDate(d.getDate()+10);
		var src = setcookie("src",$src,d);
		var wz = setcookie("wz",$wz,d);
		var cd = setcookie("cd",$cd,d);
		var dd = setcookie("dd",$dd,d);
		var sl = setcookie("sl",$sl,d);
		
		//实现点击加入购物车后图片飞起来的效果
		var $ctl = $(".content1_left");
		var $img = $ctl.find("img");
		var $imgcopy = $img.clone();//复制图片
		
		//获取图片的位置与宽度
		var $imgleft = $img.offset().left;
		var $imgtop = $img.offset().top;
		var $imgwidth = $img.width();
		
		//添加复制图的属性
		$imgcopy.css({
			position:"absolute",
			left:$imgleft,
			top:$imgtop,
			width:$imgwidth
		});
		
		$imgcopy.appendTo("body");
		
		var $sp = $(".car");
		var $spleft = $sp.offset().left;
		var $sptop = $sp.offset().top;
		
		//起飞
		$imgcopy.animate({"left":$spleft,"top":$sptop,"width":"50px","opacity":1},1000,function(){
			var $span = $(".car");
			if(k>1){
				$span.html(k);
			}else{
				i++;
				$span.html(i);
			}
			
			$imgcopy.remove();
		})
	})
	
	//商品数量的增加和减少
	var $jian = $(".jian");
	var $jia = $(".jia");
	var $kk = $(".kuang");
	var $k = $(".kuang").val();
	var k = parseInt($k);

//	console.log(k);
//	console.log(k+1);
	
	$jian.click(function(){
		
		k -= 1;
		console.log(k);
		$kk.val(k);
		if(k < 0){
			k = 0;
			$kk.val(k);
		}
	})
	
	$jia.click(function(){
		k += 1;
		$kk.val(k);
	})
	
})