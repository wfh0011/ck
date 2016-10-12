window.onload = function(){
	var oscanf = document.getElementById("scanf");
	var odiv = document.getElementById("nr");
	var oinput = oscanf.getElementsByTagName("input");
		
		//验证用户名
		oinput[0].onblur = function(){
			var yh = this.value;
			var str = /^152\d{8}$/g;
					
				if(str.test(yh)){
					odiv.innerHTML = ""
				}else{
					odiv.innerHTML = "用户名输入不正确"
				}
		}
		
		//验证密码
		oinput[1].onblur = function(){
			var mm = this.value;
			var str = /^.{6,20}$/g
			
			if(str.test(mm)){
				odiv.innerHTML = ""
			}else{
				odiv.innerHTML = "密码输入不合法"
			}
		}
		
		oinput[2].onblur = function(){
			if(oinput[1].value == oinput[2].value){
					odiv.innerHTML = "";
				}else{
					odiv.innerHTML = "两次输入密码不一致";
				}
			}
		
		//所有验证成功后  注册成功
		oinput[3].onclick = function(){
			if(oinput[0].value != ""&&oinput[1].value != ""&&oinput[2].value != ""&&oinput[4].checked){
				console.log(222);	
				alert("注册成功");
				
				//把注册成功的信息存入cookie
				var oldyonghu = oinput[0].value;
				var oldmima = oinput[1].value;
				
				var d = new Date();
				d.setDate(d.getDate()+10);
				var y = setcookie("y",oldyonghu,d);
				var m = setcookie("m",oldmima,d);
	
			}else{
				console.log(333);
			}
		}
}