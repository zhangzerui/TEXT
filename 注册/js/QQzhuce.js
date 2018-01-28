window.onload=function(){
	//图片轮播
	function tupian(){
		var side=document.querySelector(".side");
		console.log(side);
		var i=1;
		setInterval(function(){
			i++;
			side.style.backgroundImage="url(img/01-"+i+".jpg)";
			if (i==3) {
				i=0;
			}
		},5000)
	}
	tupian();
	
	//简体中文
	var language_entry=document.querySelector(".language-entry");
	var language_entry_ul=document.querySelector(".language-entry ul");
	var language_entry_img=document.querySelector(".language-entry div img");
	var language_entry_ul_a=document.querySelector(".language-entry ul li a");
	
	language_entry.onmouseover=function(){
		language_entry_ul.style.display='block';
		language_entry_img.src="img/up.png";
	}
	language_entry.onmouseout=function(){
		language_entry_ul.style.display='none';
		language_entry_img.src="img/down.png";
	}
	
	//QQ靓号
	var lianghao=document.querySelector(".lianghao");
	var lianghao_detail=document.querySelector(".lianghao-detail");
	var lianghao_k=document.getElementById('lianghao-key');
	var search_placeholder=document.getElementsByClassName('.search-placeholder');
	lianghao.onmouseover=function(){
		lianghao_detail.style.display='block';
	}
	lianghao.onmouseout=function(){
		lianghao_detail.style.display='none';
	}
	
	//昵称
	var name=document.getElementById("name");
	var msg_name=document.getElementById("msg_name");
	var flagName=document.getElementById("flagName");
	var pass=document.getElementById("pass");
	var msg_pass=document.getElementById("msg_pass");
	var flagPass=document.getElementById("flagPass");
	var rePass=document.getElementById("rePass");
	var msg_rePass=document.getElementById("msg_rePass");
	var flagRePass=document.getElementById("flagRePass");
	var checkCode=document.getElementById("checkCode");
	var as=document.getElementById("as");
	var myImg=document.getElementById("myImg");
	var msg_checkCode=document.getElementById("msg_checkCode");
	var flagCheckCode=document.getElementById("flagCheckCode");
	//昵称
	name.onfocus=function(){
		msg_name.innerHTML="<font color=#A4A5AC size=2>请输入昵称</font>";
	}
	name.onblur=function(){
		if(name.value==""){
			/*如果昵称为空*/
			msg_name.innerHTML="<img src='images/error.png'/><font color=red size=2>昵称不可以为空</font>";
			flagName.value="false";
		}else{
			/*否则就通过*/
			msg_name.innerHTML="<img src='images/ok.png'/><font color=green size=2>此昵称可用</font>";
			flagName.value="true";
		}
	}
	//密码
	pass.onfocus=function(){
		msg_pass.innerHTML="<font color=#A4A5AC size=2>请输入密码</font>";
	}
	pass.onblur=function(){
		var passReg_1=/^[\d\D]{6,16}$/g;/*第一条规则，长度为6-16个字符*/
		var passReg_2=/[\s]/g;/*第二条规则，不能包含空格*/
		var passReg_3=/^(\d){1,9}$/g;/*第三条规则，不能是9位以下纯数字*/

		if(pass.value==""){
			msg_pass.innerHTML="<img src='images/error.png'/><font color=red size=2>密码不能为空</font>";
			flagPass.value="false";
		}else if(!passReg_1.test(pass.value)){
			/*第一条规则，长度为6-16个字符*/
			msg_pass.innerHTML="<img src='images/error.png'/><font color=red size=2>6-16个字符组成</font>";
			flagPass.value="false";
		}else if(passReg_2.test(pass.value)){
			/*第二条规则，不能包含空格*/
			msg_pass.innerHTML="<img src='images/error.png'/><font color=red size=2>中间不能有空格</font>";
			flagPass.value="false";
		}else if(passReg_3.test(pass.value)){
			/*第三条规则，不能是9位以下纯数字*/
			msg_pass.innerHTML="<img src='images/error.png'/><font color=red size=2>不能是纯数字</font>";
			flagPass.value="false";
		}else{
			/*否则就通过*/
			msg_pass.innerHTML="<img src='images/ok.png'/><font color=green size=2>此密码可用</font>";
			flagPass.value="true";
		}
	}
	//再次输入密码
	rePass.onfocus=function(){
		msg_rePass.innerHTML="<font color=#A4A5AC size=2>请重新输入密码</font>";
	}
	rePass.onblur=function(){
		/*如果是第二次的密码*/
		if(rePass.value=="" || rePass.value!=pass.value){
			/*如果重新输入的密码为空或者是不等于前面输入的密码*/
			if(rePass.value==""){
				/*如果输入的密码为空*/
				msg_rePass.innerHTML="<img src='images/error.png'/><font color=red size=2>请重新输入密码</font>";
			}
			if(rePass.value!=pass.value){
				/*如果两次密码不相等*/
				msg_rePass.innerHTML="<img src='images/error.png'/><font color=red size=2>两次密码不一致</font>";
			}
			flagRePass.value="false";
		}else{
			/*否则通过*/
			msg_rePass.innerHTML="<img src='images/ok.png'/><font color=green size=2>恭喜通过</font>";
			flagRePass.value="true";
		}
	}
	//验证码
	var arr=["ecta","lxft","zzks","beyx","pbnu","pzkt","shvb","vsuz","zzks"];
	checkCode.onfocus=function(){
		msg_checkCode.innerHTML="<font color=#A4A5AC size=2>请输入验证码</font>";
	}
	checkCode.onblur=function(){
		/*如果是验证码*/
		if(as.value==""){
			/*如果验证码为空*/
			msg_checkCode.innerHTML="<img src='images/error.png'/><font color=red size=2>验证码不能为空</font>";
			flagCheckCode.value="false";
		}else{
			/*否则就调用检查验证码函数*/
			/*得到用户输入的值*/
			var userI=checkCode;
			var userIValue=userI.value;
			/*得到图片的src*/
			var myImgs=myImg.src;
			/*得到图片上的文字*/
			var imgCode=myImgs.substring(myImgs.lastIndexOf("\/")+1,myImgs.lastIndexOf("."));
			
			if(userIValue.toLowerCase()==imgCode){
				msg_checkCode.innerHTML="<img src='images/ok.png'/><font color=green size=2>验证码正确</font>";
				flagCheckCode.value="true";
			}else{
				msg_checkCode.innerHTML="<img src='images/error.png'/><font color=red size=2>验证码有误</font>";
				flagCheckCode.value="false";
				/*更换图片*/
				function changeSrc(){
					/*随机产生一个在0-2以内的数*/
					var index=Math.floor(Math.random()*8);
					myImgs="images/"+arr[index]+".jpg";
				}
				function changeImg(){
					/*得到图片控件*/
					var myImg=$("myImg");
					/*保存原来的src*/
					var src=myImg.src+".jpg";
					var newSrc=changeSrc();
					
					/*新产生的和原来的相同就再产生一次*/
					while(src==newSrc){
						newSrc=changeSrc();
					}
				
					/*更换资源*/
					myImg.src=newSrc;
				}
				changeImg();
				
				
			}
		}
	}
	
	function changeSrc(){
		/*随机产生一个在0-2以内的数*/
		var index=Math.floor(Math.random()*8);
		return "images/"+arr[index]+".jpg";
	}
	
	as.onclick=function(){
		/*保存原来的src*/
		var src=myImg.src+".jpg";
		var newSrc=changeSrc();
		
		/*新产生的和原来的相同就再产生一次*/
		while(src==newSrc){
			newSrc=changeSrc();
		}
	
		/*更换资源*/
		myImg.src=newSrc;
	}
	
	
	
	
	//立即注册
	var get_acc=document.getElementById("get_acc");
	
	
	get_acc.onclick=function(){
		if(flagName.value=="false"){
			alert("请输入昵称");
			return false;
		}
		if(flagPass.value=="false"){
			alert("请输入密码");
			return false;
		}
		if(flagRePass.value=="false"){
			alert("两次输入密码不一致");
			return false;
		}
		if(flagCheckCode.value=="false"){
			alert("验证码错误");
			return false;
		}
		if (flagName.value!="false" && flagPass.value!="false" && flagRePass.value!="false" && flagCheckCode.value!="false") {
			var arr=[]
			for(var i=0;i<11;i++){
				var as1=Math.floor(Math.random()*9);
				arr.push(as1);
			}
			alert(arr.join(''));
			document.cookie="username="+arr.join('');
			document.cookie="password="+pass.value;
			window.location="../../shouye.html";
		}
		
		
	}
	
	
	
	
	
}

	
	
	
	
	
	
	
	
	
	
	
	
	