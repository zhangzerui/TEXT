try{
	document.domain = "qq.com";
}catch(e){}

// 判断protocol 
var gj_port = document.location.protocol == "https:" ? "https:" : "http:";

//请求链接数据直接用,改造为动态数据后，将在initHTML中使用
var MGR = {
	settedWidth:0,
	customWidth:76,
	domReady:function(){},			//初始
	expires:0,
	mainPage: location.pathname==='/',
	loadJquery:false,
	Uname:null,
	cookie:{},
	login:function(){
		$("#login_ifr").attr("src","");
		if($("#login_ifr").attr("src").indexOf("http") < 0){
			var b = window.location + "";
			b = b.indexOf("#") == -1 ? b: b.substring(0, b.indexOf("#"));
			
		}
		
	},
	appcookie:function(f, j, m){ 
		var expires = MGR.expires;
		if(typeof j == "undefined"){
			if(0 < document.cookie.length){
				var k = document.cookie.match(new RegExp("(^| )" + f + "=([^;]*)(;|$)"));
				return (null === k) ? "": k[2]
			}
			return ""
		}else{
			if(arguments.callee(f) == j){
				return
			}else{
				m = $.extend({
					expires: 1,
					path: "/",
					domain: window.document.location.hostname
				},
				m || {});
				if(j === null){
					j = "";
					m.expires = -1
				}
				var g = "";
				if(m.expires && (typeof m.expires == "number" || m.expires.toUTCString)){
					var h;
					if(typeof m.expires == "number"){
						h = new Date();
						h.setTime(h.getTime() + (m.expires * 1 * 60 * 60 * 1000))
					}else{
						h = m.expires
					}
					g = h.toUTCString()
				}
				var l = m.path ? "; path=" + (m.path) : "";
				var i = m.domain ? "; domain=" + (m.domain) : jQuery.getHost();
				var e = m.secure ? "; secure": "";
				document.cookie = f + "=" + j + "; path=" + l + "; domain=" + i + "; expires=" + g
			}
		}
	},
	getUinNum:function(f){
		var e = 0;
		if(f.charAt(0) == "o" || f.charAt(0) == "0"){
			e = e + 1;
			while (f.charAt(e) == "0"){
				e++
			}
			f = f.substr(e, f.length)
		}
		return f;
	},
	getUinInfo:function(){
		var gjtk = MGR.getTk();
		$.when(
			$.ajax({
				url: "//p.guanjia.qq.com/bin/user/qrydjjs.php?op=queryIconStatus&cb=jsonpCallback1&gjtk="+ gjtk,
				dataType: 'jsonp',
				crossDomain:true,
				jsonpCallback: 'jsonpCallback1',
				jsonp: false,
				cache: false
			}),
			$.ajax({
				url: "//p.guanjia.qq.com/bin/user/login.php?cb=jsonpCallback2&gjtk="+ gjtk,
				dataType: 'jsonp',
				crossDomain:true,
				jsonpCallback: 'jsonpCallback2',
				jsonp: false,
				cache: false
			}),
			$.ajax({
				url: "//p.guanjia.qq.com/bin/user/qrydjjs.php?cb=jsonpCallback3&gjtk="+ gjtk,
				dataType: 'jsonp',
				crossDomain:true,
				jsonpCallback: 'jsonpCallback3',
				jsonp: false,
				cache: false
			})
		).then(function(a, b, c){
				var res = {
					ret: 'suc',
					Uin: ''
				};
				if(a && a[0] && a[0].code==0){
					res.icon_status = (a[0].result && a[0].result.iconBright)?1:0;
					res.Uin = a[0].uin;
				}
				if(b && b[0] && b[0].code==0){
					res.Uname = b[0].Uname;
				}
				if(c && c[0] && c[0].code==0 ){
					res.acc_today = (c[0].result && c[0].result.speedupToday)?1:0;
					res.exp_today = (c[0].result && c[0].result.extraSpeedupToday)?1:0;
				}
				userInfoCallback(res)
			});
		/*$.ajax({
			url: "//c.pc.qq.com/fcgi-bin/plogin?cb=userInfoCallback&type=1",
			dataType: "jsonp",
			jsonp: "userInfoCallback",
			type: "get",
			cache: false,
			data: "Uin=" + MGR.getUinNum(MGR.appcookie("uin")) + "&skey=" + MGR.appcookie("skey")+"&rd="+Math.random()
		})*/
	},
	getSafeInfo:function(){
		MGR.XHR("//p.guanjia.qq.com/bin/user/qrysafe.php",function(a){
			userSafeCallback(a);
		});
	},
	checkLogin:function(){
		if(MGR.appcookie("uin")){
			return true;
		}else{
			return false;
		}			
	},
	titleStatus:function(a){
		if(encodeURIComponent(a.Uname) != "undefined"){
			MGR.Uname = a.Uname;
			$("#logined").show();
			$("#nologin").hide();
			$("#face").attr("src","//q4.qlogo.cn/g?b=qq&nk="+MGR.getUinNum(MGR.appcookie("uin"))+"&s=40");
			$("#login_nickname").html(MGR.htmlEncode(a.Uname));
			if(a.icon_status==1){
				$("#iconElm").attr("class","icon_on");
			}
			MGR.getSafeInfo();
		}else{
			$("#nologin").show();
			//MGR.logout();
		}
	},
	safeStatus:function(a){
		if(a.code==0){
			$("#safeElm").attr("class","safe_lv"+a.result.safeLevel);
			$("#safejb").html(a.result.score);
		}
	},
	init:function(){
		var d = document,
		expire = MGR.expires = new Date(( + new Date()) + 1 * 3600000),
		cookie = MGR.cookie = {expires:expire,path:"/",domain:window.document.location.host},
		nav = d.createElement("div"),
		ifrDiv = d.createElement("div"),
		initEvent=function(){
			$('#mgr_nav_login').click(MGR.login);
			$('#mgr_nav_logout').click(MGR.logout);	
			if(MGR.checkLogin()){
				MGR.getUinInfo();
			}else{
				$("#nologin").show();
			}
			if(MGR.mainPage){
				MGR.fixMac();
			}
		},
		initHeader=function(){		
			ifrDiv.className = "loginframe";
			ifrDiv.id = "loginframe";
			ifrDiv.innerHTML = '<iframe name="login_ifr" id="login_ifr" frameborder="0" scrolling="no" width="100%" height="100%" src=""></iframe>';
			d.body.appendChild(ifrDiv);
		},
		initFooter=function(){
			var footDiv = d.createElement("div");
			footDiv.className = "footer";
			footDiv.id = "footer";
			footDiv.innerHTML='<p><a href="http://www.tencent.com/zh-cn/index.shtml" rel="nofollow">腾讯公司</a>|<a href="http://www.tencent.com/zh-cn/le/copyrightstatement.shtml" rel="nofollow">版权所有</a>|<a href="/market.html">市场合作</a>|<a href="/about/about.html">关于管家</a></p><p class="copyright">Copyright &copy; 1998 - 2017 Tencent. All Rights Reserved.</p>';
			d.body.appendChild(footDiv);
		},
		createCssLink=function(url){
			var s = document.createElement("link");
			s.href = url;
			s.rel = "stylesheet";
			s.type = "text/css";
			document.getElementsByTagName("head")[0].appendChild(s);
			return s;
		},
		loadScript=function(url,callback){
			var script = document.createElement("script");
			script.type = "text/javascript";
			if(script.readyState){//IE
				script.onreadystatechange = function(){
					if(script.readyState == "loaded" || script.readyState == "complete"){
						script.onreadystatechange = null;
						if(typeof callback==="function"){callback();}
					}
				}
			}else{ 
				script.onload = function(){
					if(typeof callback==="function"){callback();}
				}
			}	
			script.src = url;
			document.getElementsByTagName("head")[0].appendChild(script);
		};
		//初始化相关
		//createCssLink("//guanjia.qq.com/css/GjTitle.css");
		//这里load
		loadScript("//pc1.gtimg.com/js/jquery-1.7.2.min.js",function(){
			$(function(){
				initHeader();
				initFooter();
				initEvent();
				MGR.domReady();
				MGR.initNav();
				MGR.sent_tcss();
			})
		});
		loadScript("//pc1.gtimg.com/js/showDialog.fix.js");
	},
	initNav:function(){
		/*var n = $("body").attr("pageIndex");
		var m = $("body").attr("subIndex");
		$("#nav li").bind("mouseenter",function(){
			$(this).children("ul").show();
			$(this).addClass("set");
		}).bind("mouseleave",function(){
			$(this).children("ul").hide();
			$(this).removeClass("set");
		})
		if(n){
			var setObj = $("#nav li:nth-child("+n+") a.f");
			setObj.addClass("set");
		}
		$("#rongyu").bind("mouseenter",function(){
			$("#rongyu_info").show();
			$(this).addClass("rongyu_over");
		}).bind("mouseleave",function(){
			$("#rongyu_info").hide();
			$(this).removeClass("rongyu_over");
		})
		//暂时兼容新版本部分
		var tu;
		$("#nav_v10 #face,#nav_v10 .user_info").bind("mouseenter",function(){
			$("#nav_v10 .user_info").show();
			clearTimeout(tu);
		}).bind("mouseleave",function(){
			tu = setTimeout('$("#nav_v10 .user_info").hide()',300);
		})*/

		//如果没有navbar, 不需要init
		if(!$('#nav').length){
			return;
		}

		var match, list = $('#nav a'), len = list.length, path =location.pathname;
		for(var i=0;i<len;i++){
			var $tmp = list.eq(i);
			if($tmp.attr('href').indexOf(path)>-1){
				match = $tmp.parents('.top-nav-li').index();
				break;
			}
		}
		var n = (match && match+1)||$("body").attr("pageIndex")||1;
		var m = $("body").attr("subIndex");
		var snav = $("#navline");
		slideTo = function(index){
			var nobj = $("#nav >li").eq(index-1);
			var pos = $("#nav >li").eq(index-1).position().left;
			snav.stop().animate({width:nobj.width(),left:pos}, "fast");
		}
		slideTo(n);
		$("#nav >li").bind("mouseenter",function(){
			$(this).children("ul").stop(true,true).slideDown();
			$(this).addClass("set");
			slideTo($("#nav >li").index(this)+1);
		}).bind("mouseleave",function(){
			$(this).children("ul").stop(true,true).slideUp();
			$(this).removeClass("set");
			slideTo(n);
		})
		var tu;
		$("#face,.user_info").bind("mouseenter",function(){
			$(".user_info").show();
			clearTimeout(tu);
		}).bind("mouseleave",function(){
			tu = setTimeout('$(".user_info").hide()',300);
		})
	},
	navOps:function(obj){
		var ofl = obj.children("a.f").offset();
		var f_w = obj.children("ul").width();
		 obj.children("ul").css({"margin-left":-f_w/2+"px","left":(ofl.left+47)+"px"});
	},
	htmlEncode:function(sStr){
		if(sStr){
			sStr = sStr.replace(/&/g,"&amp;");
			sStr = sStr.replace(/>/g,"&gt;");
			sStr = sStr.replace(/</g,"&lt;");
			sStr = sStr.replace(/"/g,"&quot;");
			sStr = sStr.replace(/'/g,"&#39;");
			return sStr;	
		}
	},
	sent_tcss:function(){
		var tcss_url = "http://pingjs.qq.com/tcss.ping.js";
		if(gj_port=="https:"){
			tcss_url = "https://pingjs.qq.com/tcss.ping.https.js";
		}
		$.ajax({
			type: 'GET',
			url: tcss_url,
			success: function(){if(typeof(pgvMain) == 'function'){pgvMain()}},
			dataType: 'script',
			cache: true
		});
		$.ajax({
			type: 'GET',
			url: '//pc1.gtimg.com/guanjia/js/tj.js',
			success: function(){
				mtj.run();
			},
			dataType: 'script',
			cache: true
		});
		
		$(document).click(function (evt) {
			var tagPrefix = "pcmgr.new"
			var tagAttr = 'data-stats';
			var tagPattern = /^(?!\.)[\w-]+(?:\.[\w-]+)*?$/;
			// check feature
			if ('function' !== typeof(pgvSendClick)) {
				return;
			}
				// get current target
			var curTar = evt.target;
			if (!curTar || 1 !== curTar.nodeType) {
				return;
			}
				// get closest clickable element
			var clickableElm = $(curTar).closest('a[' + tagAttr + '],input[' + tagAttr + '],li[' + tagAttr + ']');
			if (0 === clickableElm.length) {
			return;
			}
				// get hot tag
			var hotTag = clickableElm.attr(tagAttr);
			if (!tagPattern.test(hotTag)) {
			return;
			}
				// send log
			var objArg = {
			'hottag' : tagPrefix + '.' + hotTag
			};
			//virtualDomain && (objArg['virtualDomain'] = virtualDomain);
			pgvSendClick(objArg);
		})
		//seo上报
		var referer_url=document.referrer;
		if(referer_url.indexOf("www.baidu.com")>=0){
			var tt = setInterval(function(){
				if(typeof(pgvMain) == 'function'){
					clearInterval(tt);
					pgvSendClick({hottag:'pcmgr.new.referer_other.baidu'});	
					if(MGR.GetQueryString('ADTAG')){
						pgvSendClick({hottag:'pcmgr.new.referer_other.'+MGR.GetQueryString('ADTAG')});	
					}
				}
			},500);
		}
	},
	pageWidth:function() {
		return (document.documentElement && document.documentElement.scrollWidth) || document.body.scrollWidth;
	},
	showDiv:function(objid){
		showDialog.show({id:objid,bgcolor:"#000000",opacity:60});	
	},
	fixMac:function(){
		if((window.navigator.userAgent).toLowerCase().indexOf("mac os") > 0 && (window.navigator.userAgent).toLowerCase().indexOf("iphone") == -1){
			$.getScript("/assets/js/mac_mask.js?t="+Math.random());
		}
	},
	GetQueryString:function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return encodeURIComponent(r[2]); return null;
	},
	loadScript:function(a,callback){
		var sobj = new Array();
		$.ajaxSetup({
			cache: true
		});
		var o = a;
		for (var i=0; i<o.length; i++){
			sobj.push($.getScript(o[i]))
		}
		$.when.apply(
			$,sobj
		).done(function() {
			if(typeof callback==="function"){
				callback();
			}else{
				MGR.domReady();
			}
		})
	},
	getTk:function() {
		var tk = "";
		var skey = MGR.appcookie("skey");
		if (skey != null) {
			var hash = 5381;
			for (var i = 0, len = skey.length; i < len; ++i) {
				hash += (hash << 5) + skey.charAt(i).charCodeAt();
			}
			tk = hash & 0x7fffffff;
		}
		return tk;
	},
	//异步请求接口
	XHR:function(url,callback){
		return $.ajax({
			url : url,
			dataType : "jsonp",
			type : "get",
			cache : false,
			data: "&gjtk="+MGR.getTk() + "&uname=" + encodeURIComponent(MGR.Uname),
			success: function(a){
				if(typeof(callback)=='function'){
					callback(a);
				}
			}
		})
	}
}
function ptlogin2_onResize(a, b) {
    $("#loginframe").css({
        width: a + "px",
        height: b + "px"
    })
}
function ptlogin2_onClose() {
    showDialog.hide()
}
function userInfoCallback(a){
	MGR.titleStatus(a);
}
function userSafeCallback(a){
	MGR.safeStatus(a);
}
//初始化
MGR.init();

(function () {
if (typeof window.postMessage !== 'undefined') {
    window.onmessage = function(event) {
        var msg = event || window.event; // 兼容IE8
        var data;
        if (typeof  JSON !== 'undefined') { // IE7兼容模式不存在JSON对象
            data = JSON.parse(msg.data);
        } else {
            data = str2JSON(msg.data);
        }
        switch (data.action) {
            case 'close':
            ptlogin2_onClose();
            break;
            case 'resize':
            ptlogin2_onResize(data.width, data.height);
            break;
            default: //什么也不做，便于我们扩展接口
            break;
        }
        // 考虑到ptlogin接口的扩展性，希望业务在对于data.action的条件处理也要保持一定的可扩展性
        // 如不要采用：data.action == 'resize' ? ptlogin2_onResize(data.width, data.height) : ptlogin2_onClose()
        // 一旦ptlogin支持了新的接口，那么该代码将会无法正常工作，影响业务正常使用
    }
} else { //不支持postMessage的IE6，7 hack方法
    navigator.ptlogin_callback = function(msg) {
        var data = str2JSON(msg);
        switch (data.action) {
            case 'close':
                ptlogin2_onClose();
                break;
            case 'resize':
                ptlogin2_onResize(data.width, data.height);
                break;
            default: //什么也不做，便于我们扩展接口
                break;
        }
    }
}
				/**
 * [str2JSON 降字符串转换成json对象（供业务参考）]
 * @param  {String} str [json字符串]
 * @return {Object}
 */
function str2JSON(msg) {
    // borrow from jquery
    var rvalidchars = /^[\],:{}\s]*$/,
    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
    if (rvalidchars.test(msg.replace(rvalidescape, "@")
                    .replace(rvalidtokens, "]")
                    .replace(rvalidbraces, "")) ) {
        return (new Function("return " + msg))();
    }
    return {};
}
})();
function ShowLoginText(){
    layer.open({
        type:1,
        title:false,
        area:["550px","378px"],
        content:$("#loginBox"),
        });
    }
function Login(){
    var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputUserPwd").val());//获取密码
    if(username==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        
        });
    }else{
		$("#wocao").attr("href","shouye.html");
    }
}