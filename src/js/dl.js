$(function(){
	//获取注册之后的信息
	var newyh = getcookie("y");
	var newmm = getcookie("m")
  	
  	//记住密码后取出存入的cookie
  	var znyh = getcookie("ny");
  	var znmm = getcookie("nm");
  	
  	var $scanf = $(".scanf");
  	var $inp1 = $scanf.find("input").eq(0);
  	var $inp2 = $scanf.find("input").eq(1);
  	var $inp3 = $scanf.find("input").eq(2);
  	var $inp4 = $scanf.find("input").eq(3);
  	
  	var $xs = $("#xs");
  	
  	if(znyh){
  		$inp1.val(znyh);
  		$inp2.val(znmm);
  		
  	}
  	
  	//登录
  	$inp4.click(function(){
  		console.log($inp1.val())
  		
  		//判断登录信息与注册信息是否一致
  		if($inp1.val() == newyh&&$inp2.val() == newmm){
			console.log(111);	
			
			//保存用户到首页
			var d = new Date();
			d.setDate(d.getDate()+10);
			var zhao = $inp1.val();
			console.log(zhao);
			
			var czhao = setcookie("czhao",zhao,d);
			window.open("index.html")
		}
  		
  		if($inp1.val() != newyh){
			$xs.html("用户名不正确");
		}else if($inp2.val() != newmm){
			$xs.html("密码不正确");
		}
		
		//是否勾选记住密码一项
		if($inp3.checked){
			console.log(678)
			
			//存入cookie
			var nnyh = $inp1.val();
			var nnmm = $inp2.val();
			
			var d = new Date();
			d.setDate(d.getDate()+10);
			var ny = setcookie("ny",nnyh,d);
			var nm = setcookie("nm",nnmm,d);
			
		}
  	})
})