$(function(){
	var $tab = $("table");
	var $js = $(".jiesuan");
	var $zj = $(".zj");
	$js.css("display","none");
	
	//从cookie中获取详情页面商品的内容
	var nsrc = getcookie("src");
	var nwz = getcookie("wz");
	var ncd = getcookie("cd");
	var ndd = getcookie("dd");
	var nsl = getcookie("sl");
	
	//匹配查找并去掉
	var qd1 = ndd.replace(",","");
	var qd2 = qd1.replace("￥","");

	//金额小结
	var cj = qd2 * nsl;

	
	if(nsrc){
		$js.css("display","block");
		$(".tz").css("display","none");
		$(".ding").css("display","block");
		$zj.html(cj);
		//$tab.css("display","block");
		
		var $input = $("<input/>").attr("type","checkbox");
		var $img = $("<img/>").attr("src",nsrc);
		var $a = $("<a/>").attr("href","#");
		$a.html("删除");
		var $sp = $("<span/>")
		$sp.append("￥"+cj);
		
		var $tr = $("<tr/>");
		var $td1 = $("<td/>");
		var $td2 = $("<td/>");
		var $td3 = $("<td/>");
		var $td4 = $("<td/>");
		var $td5 = $("<td/>");
		var $td6 = $("<td/>");
		var $td7 = $("<td/>");
		
		$td1.append($input).appendTo($tr);
		$td2.append($img).append(nwz).appendTo($tr);
		$td3.append(ncd).appendTo($tr);
		$td4.append(ndd).appendTo($tr);
		$td5.append(nsl).appendTo($tr);
		$td6.append($sp).appendTo($tr);
		$td7.append($a).appendTo($tr);
		
		$tr.appendTo($tab);
		
		//删除tr
		$a.click(function(){
			$(this).parent().parent().remove();
			$(".ding").css("display","none");
			$(".tz").css("display","block");
			$js.css("display","none");
			removecookie("src");
		})
	}
	
})