/*
function macfix(){
	// $('#p0_btn_pc').css('display','none');
	$('#p0_btn_beta').css('display','none');
	$('#p0_btn span').css('display','none');
	$('#p0_btn_mac').css('display','block');
}
function mac(){
	str = navigator.platform.toString();
	if (str == 'MacIntel') {
		macfix();
		var jump = document.referrer.indexOf('http://browser.qq.com/mac') < 0;
		jump ?  window.location.href = "./mac/index.html" : null;
	}
}
function isIpad(){
	if (/iPad/i.test(navigator.userAgent)) {
		var jump = document.referrer.indexOf('http://browser.qq.com/ipad/index.html') == 0;
		!jump ?  window.location.href = "./ipad/index.html?ADTAG=pc-qqbrowser-redirect" : null;
	}
}
isIpad();
*/
$(function(){
	autoScale();
});

$(window).resize(function(){
	autoScale();
});
var autoScale = function(){
	var dh = $(window).height();
	if(dh < 960){
		var scale=(dh/960).toString().substring(0,6);
		var smt = -100 * scale;
		var dpb = 20 * scale;
		var spb = 9 * scale;
		$('.stage,.scrolling,.download,#add_nav').css({
			'-webkit-transform': 'scale('+scale+')',
			'-webkit-transform-origin': 'top',
			'transform': 'scale('+scale+')',
			'transform-origin': 'top'
		});

		$('.stage').css({
			'margin-top': smt
		});

		$('.download').css({
			'bottom': dpb + '%'
		});

		$('.scrolling').css({
			'bottom': spb + '%'
		});
	}
}

ie=false;
function isIE(){
	if(!!window.ActiveXObject || "ActiveXObject" in window){
		return true;
	}else{
		return false;
	}
}
if (navigator.userAgent.indexOf("Firefox")>0) {
	//window.location.href = "./index_static.html"+location.search;
};

function IEVersion() {
  var ua = navigator.userAgent;
  var reg = /Trident\/(\d+\.\d+)/;
  reg = reg.exec(ua);
  if (reg && reg[1]) {
  	return +reg[1] + 4;
  }
  reg = /MSIE\s*(\d+\.\d+)/;
  reg = reg.exec(ua);
  if (reg && reg[1]) {
  	return +reg[1];
  }
  return -1;
}


pn = 0;
direction = true;
inital = true;
playing = false;
playingduration = 3000;
var scrollFunc=function(event){
    event=event || window.event;
    if (!playing) {
    	if (event.wheelDelta < 0 || event.detail > 0) {
    		motion(true);
    	}else{
    		motion(false);
    	}
    };
}
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=document.onmousewheel=scrollFunc;
document.onkeydown = function(event) {
		event=event || window.event;
		var c = event.keyCode;
		if(!playing) {
			if (c==40||c==32||c==39) {
				motion(true);
			}else if (c==38||c==37) {
				motion(false);
			}
		}
	}
function playingdelay(){
	playing = true;
	setTimeout(function(){playing = false;},playingduration);
}
function motion (direction) {
	if (direction == true) {
		if (pn == 4) {
			pn = 0;
			core(0,true);
			playingdelay();
		}else{
			pnsnap = pn;
			pn += 1;
			core(pn,true);//
			playingdelay();
		}
	}else{
		if (pn == 0) {
		}else{
			pnsnap = pn;
			pn -= 1;
			core(pn,false);
			playingdelay();
		}
	}

}

function core (pn,loop){
	if(typeof(pgvMain) == 'function') {
		pgvSendClick({hottag:'browser.qb9.scroll'+(pn+1)});
	}
	$('#add_nav span').removeClass('on');
	$('#add_nav span:nth-child('+(pn+1)+')').addClass('on');

	var pub_t = 1000;
	var p0 = $('#p0');
	var p1 = $('#p1');
	var p2 = $('#p2');
	var p3 = $('#p3');
	var p4 = $('#p4');
	var layer11 = $("#layer11");
	var layer12 = $("#layer12");
	var layer13 = $("#layer13");
	var layer14 = $("#layer14");
	var layer15 = $("#layer15");
	var layer21 = $("#layer21");
	var layer22 = $("#layer22");
	var layer23 = $("#layer23");
	var layer24 = $("#layer24");
	var layer25 = $("#layer25");
	var layer26 = $("#layer26");
	var layer27 = $("#layer27");
	var layer28 = $("#layer28");
	var layer123456 = $("#layer123456");
	var layer31 = $("#layer31");
	var layer32 = $("#layer32");
	var layer33 = $("#layer33");
	var layer34 = $("#layer34");
	var layer35 = $("#layer35");
	var layer36 = $("#layer36");
	var layer37 = $("#layer37");
	var layer38 = $("#layer38");
	var layer39 = $("#layer39");
	var layer41 = $("#layer41");
	var layer42 = $("#layer42");
	var layer43 = $("#layer43");
	var layer44 = $("#layer44");
	var layer45 = $("#layer45");
	var layer46 = $("#layer46");
	var layer47 = $("#layer47");
	var layer48 = $("#layer48");
	var layer49 = $("#layer49");
	var layer410 = $("#layer410");
	var layer411 = $("#layer411");
	var layer412 = $("#layer412");
	var layer413 = $("#layer413");
	var layer456 = $("#layer456");
	var layer478 = $("#layer478");
	var layer4901 = $("#layer4901");
	var layer51 = $("#layer51");
	var layer52 = $("#layer52");
	var layer53 = $("#layer53");
	var layer54 = $("#layer54");
	var layer55 = $("#layer55");
	var layer56 = $("#layer56");
	var layer57 = $("#layer57");
	var layer545 = $("#layer545");
	var scrolling = $(".scrolling");
	var copyright = $(".copyright");

	if(pn == 0) {
	}else if (pn == 1) {
	}else if (pn == 2) {
	}else if (pn == 3) {
	};

	if (pn == 0) {
		var p0in = function(){
			layer11.velocity({translateX:'-300px',opacity:0},{duration:0}).velocity({translateX:'30px',opacity:1},{duration:400}).velocity({translateX:'0px',opacity:1},{duration:150});
			layer12.velocity({translateX:'300px',translateY:'0',opacity:0},{duration:0}).velocity({translateX:'-30px',opacity:1},{duration:300,delay:200}).velocity({translateX:'0px',opacity:1},{duration:150});
			layer13.velocity({rotateX:'92deg',translateY:'0',scale:0,opacity:0},{duration:0}).velocity({opacity:1,scale:1},{duration:500,delay:300}).velocity({rotateX:'-10deg'},{duration:300}).velocity({rotateX:'0deg'},{duration:200});
			layer14.velocity({rotateX:'-30deg',opacity:0},{duration:0}).velocity({opacity:1,rotateX:'0deg'},{duration:300,delay:800});
			layer15.velocity({scale:3,opacity:0},{duration:0}).velocity({opacity:1,scale:1},{duration:800,delay:200});
			//layer16.velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:800,delay:1000});
		}

		if(inital == true){
			p1.css('visibility','hidden');
			p2.css('visibility','hidden');
			p3.css('visibility','hidden');
			p4.css('visibility','hidden');
			p0in();
			inital = false;
		}else{
			setTimeout(function(){p0in();},1000)
		}
		if(loop == true){
			setTimeout(function(){
				p4.css('visibility','hidden');
			},1000)

			var p4away = function(){
				layer51.velocity({scale:'0.8'},{duration:pub_t*0.2}).velocity({scale:'3',translateX:'-200px',opacity:0},{duration:pub_t*0.5});
				layer52.velocity({scale:'0.8'},{duration:pub_t*0.2}).velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:200});
				layer53.velocity({scale:'0.8'},{duration:pub_t*0.2}).velocity({scale:'3',translateX:'200px',opacity:0},{duration:pub_t*0.5,delay:400});
				layer545.velocity({scale:'0.8'},{duration:pub_t*0.2}).velocity({scale:'2',opacity:0},{duration:pub_t*0.5});
				layer56.velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:500});
				layer57.velocity({opacity:0},{duration:pub_t*0.6});
				copyright.velocity({opacity:0},{duration:500,delay:400});
				scrolling.css("display","block");
			}
			p4away();
		}

		layer11.velocity({translateZ:'0',translateY:'0'},{duration:0});
		layer12.velocity({translateZ:'0'},{duration:0});
		layer13.velocity({translateZ:'0'},{duration:0});
		layer14.velocity({translateZ:'0'},{duration:0});
		layer15.velocity({translateZ:'0'},{duration:0});

		var p1back = function(){
			layer21.velocity({translateX:'30px',translateY:'-30px',opacity:1},{duration:pub_t*0.5}).velocity({translateX:'-800px',translateY:'800px',opacity:0},{duration:pub_t*0.1});
			layer22.velocity({scale:'0.3',rotateZ:'120deg',opacity:0},{duration:pub_t*0.6})
			setTimeout(function(){
				layer22.removeClass("allrotate");
			},1000)
			layer23.velocity({scale:'1',rotateZ:'30deg'},{duration:pub_t*0.3}).velocity({opacity:1,scale:'1',rotateZ:'0'},{duration:pub_t*0.3}).velocity({scale:'0.5',rotateZ:'120deg',opacity:0},{duration:pub_t*1});
			layer24.velocity({translateX:'-240px',opacity:0},{duration:pub_t*0.6,delay:300});
			layer25.velocity({translateY:'20px',opacity:0},{duration:pub_t*0.3});
			layer26.velocity({translateY:'-20px',opacity:0},{duration:pub_t*0.3});
			layer27.velocity({translateX:'-50px',opacity:'1'},{duration:pub_t*0.3,delay:600}).velocity({translateX:'800px',opacity:0},{duration:pub_t*0.2});
			layer28.velocity({opacity:0},{duration:600,delay:600});
			copyright.velocity({opacity:0},{duration:500,delay:400});
			scrolling.css("display","block");
		}

		if(loop == false){
			p1back();
		}
	}else if (pn == 1) {
		p1.css('visibility','visible');
		var p0away = function (){
			layer11.velocity({translateZ:'500px',translateY:'100px',translateX:'-100px',opacity:0},{duration:pub_t*0.6});
			layer12.velocity({translateZ:'500px',translateY:'50px',translateX:'100px',opacity:0},{duration:pub_t*0.6,delay:200});
			layer13.velocity({rotateX:'-92deg'},{duration:pub_t*0.2}).velocity({scale:'3',translateY:'-500px',opacity:0},{duration:pub_t*0.5});
			layer14.velocity({translateZ:'1000px',opacity:0},{duration:pub_t*0.6});
			layer15.velocity({translateZ:'1000px',opacity:0},{duration:pub_t*0.6});
			scrolling.css("display","none");
		}
		if(loop == true){
			p0away();
		}

		layer21.velocity({translateX:'0',translateY:'0',opacity:0},{duration:0});
		layer27.velocity({scale:'1'},{duration:0});

		var p3back = function(){
			layer41.velocity({translateY:'0px'},{duration:0}).velocity({scale:1},{duration:pub_t*0.5}).velocity({translateY:'-20px',scale:0.3,opacity:0},{duration:pub_t*0.2});
			layer42.velocity({rotateX:'0deg'},{duration:0}).velocity({rotateX:'92deg',opacity:0},{duration:pub_t*0.5});
			layer43.velocity({opacity:'1'},{duration:0}).velocity({opacity:0},{duration:pub_t*1,delay:100});
			layer44.removeClass('layer44').velocity({opacity:0},{duration:pub_t*0.5});
			layer45.velocity({opacity:1,translateY:'0'},{duration:0}).velocity({translateY:'40px',opacity:0},{duration:pub_t*0.5,delay:100});
			layer46.velocity({translateY:'0'},{duration:0}).velocity({translateY:'-20px',opacity:1},{duration:pub_t*0.5}).velocity({translateY:'60px',opacity:0},{duration:pub_t*0.2});
			layer47.velocity({opacity:1,translateY:'0'},{duration:0}).velocity({translateY:'20px',opacity:0},{duration:pub_t*0.5,delay:300});
			layer48.velocity({translateY:'0'},{duration:0}).velocity({translateY:'10px',opacity:1},{duration:pub_t*0.5,delay:100}).velocity({translateY:'-10px',opacity:0},{duration:pub_t*0.2});
			layer4901.velocity({translateX:'-0',translateY:'0',opacity:1},{duration:0}).velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:pub_t*0.5});
			layer410.removeClass("layer410");
			layer411.removeClass("layer411");
			layer412.velocity({translateZ:'0',opacity:0},{duration:0}).velocity({translateZ:'-50px',opacity:1},{duration:pub_t*0.5}).velocity({translateZ:'800px',opacity:0},{duration:pub_t*0.3});
			layer413.velocity({opacity:1},{duration:0}).velocity({opacity:0},{duration:600,delay:600});
		}
		if(loop == false){
			p3back();
		}

		var p1in = function(){
			layer123456.velocity({scale:'1',opacity:1},{duration:0});
			layer21.velocity({translateX:'-800px',translateY:'800px',opacity:0},{duration:0}).velocity({translateX:'30px',translateY:'-30px',opacity:1},{duration:pub_t*0.5}).velocity({translateX:'0',translateY:'0'},{duration:pub_t*0.1});
			layer22.velocity({scale:'0.3',rotateZ:'120deg',opactiy:0},{duration:0}).velocity({opacity:1,scale:'1',rotateZ:'0'},{duration:pub_t*1});
			setTimeout(function(){
				layer22.addClass("allrotate");
			},1000)
			layer23.velocity({scale:'0.5',rotateZ:'120deg',opacity:0},{duration:0}).velocity({opacity:1,scale:'1',rotateZ:'0'},{duration:pub_t*0.5}).velocity({scale:'1',rotateZ:'30deg'},{duration:pub_t*0.5}).velocity({scale:'1',rotateZ:'0deg'},{duration:pub_t*0.5});
			layer24.velocity({translateX:'-240px',opacity:0},{duration:0}).velocity({translateX:'0',opacity:'1'},{duration:pub_t*0.6,delay:800});
			layer25.velocity({translateY:'20px',opacity:0},{duration:0}).velocity({translateY:'0',opacity:'1'},{duration:pub_t*0.3,delay:1500});
			layer26.velocity({translateY:'-20px',opacity:0},{duration:0}).velocity({translateY:'0',opacity:'1'},{duration:pub_t*0.3,delay:1500});
			layer27.velocity({translateX:'800px',opacity:0},{duration:0}).velocity({translateX:'-50px',opacity:'1'},{duration:pub_t*0.3,delay:600}).velocity({translateX:'0px'},{duration:pub_t*0.2});
			layer28.velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:800,delay:1500});
			copyright.velocity({opacity:1},{duration:800,delay:1800});
		}
		//p1in();
		setTimeout(function(){p1in();},1000)
	}else if (pn == 2) {
		p2.css('visibility','visible');
	
		var p1away = function(){
			layer21.velocity({translateX:'-50px',translateY:'50px'},{duration:pub_t*0.2}).velocity({translateX:'600px',translateY:'-600px'},{duration:pub_t*0.5});
			layer123456.velocity({scale:'3',opacity:0},{duration:pub_t*0.6});
			setTimeout(function(){
				layer22.removeClass("allrotate");
			},1000)
			layer27.velocity({scale:'0.7'},{duration:pub_t*0.2}).velocity({scale:'2',opacity:0},{duration:pub_t*0.6});
			layer28.velocity({opacity:0},{duration:pub_t*0.6});
		}
		if(loop == true){
			p1away();
		}

		layer41.velocity({scale:'1'},{duration:0});
		layer43.velocity({scale:'1'},{duration:0});
		layer42.velocity({scale:'1',rotateX:'0'},{duration:0});
		layer4901.velocity({scale:'1'},{duration:0});
		layer412.velocity({scale:'1'},{duration:0});
		layer413.velocity({opacity:0},{duration:0});

		var p2back = function(){
			layer31.velocity({translateY:'50px'},{duration:pub_t*0.5,delay:500}).velocity({translateY:'-550px'},{duration:pub_t*0.2});
			layer32.velocity({translateX:'10px',translateY:'-3px',opacity:1},{duration:pub_t*0.3,delay:200}).velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:pub_t*0.3});
			layer33.velocity({translateX:'-10px',translateY:'-3px',opacity:1},{duration:pub_t*0.3}).velocity({translateX:'125px',translateY:'130px',opacity:0},{duration:pub_t*0.3});
			layer34.velocity({rotateX:'-90deg',scale:2,translateX:'-100px',translateY:'-100px',opacity:0},{duration:pub_t*0.6});
			layer35.velocity({rotateZ:'-90deg',scale:2,translateX:'-150px',translateY:'-150px',opacity:0},{duration:pub_t*0.6,delay:200});
			layer36.velocity({rotateX:'-90deg',scale:2,translateX:'100px',translateY:'-100px',opacity:0},{duration:pub_t*0.6,delay:500});
			layer37.velocity({rotateZ:'-90deg',scale:2,translateX:'150px',translateY:'150px',opacity:0},{duration:pub_t*0.6,delay:300});
			layer38.velocity({translateX:'50px',opacity:'1'},{duration:pub_t*0.6,delay:300}).velocity({translateX:'-800px',opacity:0},{duration:pub_t*0.2});
			layer39.velocity({opacity:1},{duration:0}).velocity({opacity:0},{duration:600,delay:600});
		}
		if(loop == false){
			p2back();
		}
		//p3in();
		var p3in = function(){
			layer456.velocity({scale:'1',opacity:1},{duration:0});
			layer478.velocity({scale:'1',opacity:1},{duration:0});
			layer41.velocity({translateY:'-20px',scale:0.3},{duration:0}).velocity({scale:1,opacity:1,opacity:1},{duration:pub_t*0.5}).velocity({translateY:'0px'},{duration:pub_t*0.2});
			layer42.velocity({rotateX:'92deg'},{duration:0}).velocity({rotateX:'0deg',opacity:1},{duration:pub_t*0.5});
			layer43.velocity({opacity:'0'},{duration:0}).velocity({opacity:1},{duration:pub_t*1,delay:800});
			layer44.velocity({opacity:1},{duration:pub_t*0.2});
			setTimeout(function(){
				layer44.addClass('layer44');
			},500);
			layer45.velocity({translateY:'40px',opacity:0},{duration:0}).velocity({opacity:1,translateY:'0'},{duration:pub_t*0.5,delay:800});
			layer46.velocity({translateY:'60px',opacity:0},{duration:0}).velocity({translateY:'-20px',opacity:1},{duration:pub_t*0.5,delay:900}).velocity({translateY:'0'},{duration:pub_t*0.2});
			layer47.velocity({translateY:'20px',opacity:0},{duration:0}).velocity({opacity:1,translateY:'0'},{duration:pub_t*0.5,delay:600});
			layer48.velocity({translateY:'-10px',opacity:0},{duration:0}).velocity({translateY:'10px',opacity:1},{duration:pub_t*0.5,delay:800}).velocity({translateY:'0'},{duration:pub_t*0.2});
			layer49.velocity({opacity:1},{duration:0});
			layer410.velocity({opacity:1},{duration:0});
			layer411.velocity({opacity:1},{duration:0});
			layer4901.velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:0}).velocity({translateX:'-0',translateY:'0',opacity:1},{duration:pub_t*0.5});
			layer410.addClass("layer410");
			layer411.addClass("layer411");
			layer412.velocity({translateZ:'800px',opacity:0},{duration:0}).velocity({translateZ:'-50px',opacity:1},{duration:pub_t*0.5}).velocity({translateZ:'0'},{duration:pub_t*0.3});
			layer413.velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:800,delay:1000});
		}
		setTimeout(function(){p3in();},1000)
	}else if (pn == 3) {
		p3.css('visibility','visible');

		var p3away = function(){
			layer41.velocity({scale:'0.8'},{duration:pub_t*0.2}).velocity({scale:'3',opacity:0},{duration:pub_t*0.5});
			layer43.velocity({scale:'0.9'},{duration:pub_t*0.2,delay:200}).velocity({scale:'5',opacity:0},{duration:pub_t*0.5});
			layer42.velocity({rotateX:'-92deg'},{duration:pub_t*0.2}).velocity({scale:'3',opacity:0},{duration:pub_t*0.5});
			layer44.removeClass('layer44').velocity({opacity:0},{duration:pub_t*0.2});
			layer456.velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:300});
			layer478.velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:300});
			layer4901.velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:300});
			layer412.velocity({scale:'3',opacity:0},{duration:pub_t*0.5,delay:500});
			layer413.velocity({opacity:0},{duration:pub_t*0.6});
		}
		if(loop == true){
			p3away();
		}

		layer31.velocity({scale:'1'},{duration:0});
		layer32.velocity({scale:'1',translateX:'0'},{duration:0});
		layer33.velocity({scale:'1',translateX:'0'},{duration:0});
		layer38.velocity({scale:'1'},{duration:0});
		layer34.velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0'},{duration:0});
		layer35.velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0'},{duration:0});
		layer36.velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0'},{duration:0});
		layer37.velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0'},{duration:0});

		var p4back = function(){
			layer51.velocity({translateY:'0px'},{duration:0}).velocity({translateY:'100px'},{duration:pub_t*0.2,delay:300}).velocity({translateY:'-550px',opacity:0},{duration:pub_t*0.1});
			layer52.velocity({translateX:'0',translateY:'0px'},{duration:0}).velocity({translateX:'10px',translateY:'-5px',opacity:1},{duration:pub_t*0.2,delay:100}).velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:pub_t*0.2});
			layer53.velocity({translateX:'0',translateY:'0px'},{duration:0}).velocity({translateX:'10px',translateY:'-5px',opacity:1},{duration:pub_t*0.2}).velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:pub_t*0.2});
			layer545.velocity({scale:'1',rotateZ:'0'},{duration:0}).velocity({scale:'1.1',rotateZ:'0'},{duration:pub_t*0.2}).velocity({scale:'0.3',rotateZ:'120deg',opacity:0},{duration:pub_t*0.5})
			layer55.removeClass("allrotate");
			layer56.velocity({translateX:'0px'},{duration:0}).velocity({translateX:'-50px',opacity:'1'},{duration:pub_t*0.3,delay:500}).velocity({translateX:'800px',opacity:0},{duration:pub_t*0.1});
			layer57.velocity({opacity:1},{duration:0}).velocity({opacity:0},{duration:600,delay:600});
		}
		if(loop == false){
			p4back();
		}

		// p2 in
		var p2in = function(){
			layer31.velocity({translateY:'-550px'},{duration:0}).velocity({translateY:'50px',opacity:1},{duration:pub_t*0.5}).velocity({translateY:'0px'},{duration:pub_t*0.2});
			layer32.velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:0}).velocity({translateX:'10px',translateY:'-3px',opacity:1},{duration:pub_t*0.3,delay:500}).velocity({translateX:'0',translateY:'0px'},{duration:pub_t*0.3});
			layer33.velocity({translateX:'125px',translateY:'130px',opacity:0},{duration:0}).velocity({translateX:'-10px',translateY:'-3px',opacity:1},{duration:pub_t*0.3,delay:800}).velocity({translateX:'0',translateY:'0px'},{duration:pub_t*0.3});
			layer34.velocity({rotateX:'-90deg',scale:2,translateX:'-100px',translateY:'-100px',opacity:0},{duration:0}).velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0',opacity:1},{duration:pub_t*0.6,delay:1000});
			layer35.velocity({rotateZ:'-90deg',scale:2,translateX:'-150px',translateY:'-150px',opacity:0},{duration:0}).velocity({rotateZ:'0',scale:1,translateX:'0',translateY:'0',opacity:1},{duration:pub_t*0.6,delay:800});
			layer36.velocity({rotateX:'-90deg',scale:2,translateX:'100px',translateY:'-100px',opacity:0},{duration:0}).velocity({rotateX:'0',scale:1,translateX:'0',translateY:'0',opacity:1},{duration:pub_t*0.6,delay:500});
			layer37.velocity({rotateZ:'-90deg',scale:2,translateX:'150px',translateY:'150px',opacity:0},{duration:0}).velocity({rotateZ:'0',scale:1,translateX:'0',translateY:'0',opacity:1},{duration:pub_t*0.6,delay:700});
			layer38.velocity({translateX:'-800px',opacity:0},{duration:0}).velocity({translateX:'50px',opacity:'1'},{duration:pub_t*0.6,delay:300}).velocity({translateX:'0px'},{duration:pub_t*0.2});
			layer39.velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:800,delay:1500});
		}
		setTimeout(function(){p2in();},1000)
	}else if(pn == 4){
		p4.css('visibility','visible');

		layer51.velocity({scale:'1',translateX:'0'},{duration:0});
		layer52.velocity({scale:'1'},{duration:0});
		layer53.velocity({scale:'1',translateX:'0'},{duration:0});
		layer545.velocity({scale:'1'},{duration:0});
		layer56.velocity({scale:'1'},{duration:0});

		var p2away = function(){
			layer31.velocity({scale:'0.9'},{duration:pub_t*0.2}).velocity({scale:'2',opacity:0},{duration:pub_t*0.4});
			layer32.velocity({scale:'0.9'},{duration:pub_t*0.2}).velocity({scale:'3',translateX:'300px',opacity:0},{duration:pub_t*0.3,delay:200});
			layer33.velocity({scale:'0.9'},{duration:pub_t*0.2}).velocity({scale:'3',translateX:'-300px',opacity:0},{duration:pub_t*0.3,delay:400});
			layer38.velocity({scale:'0.9'},{duration:pub_t*0.2}).velocity({scale:'3',opacity:0},{duration:pub_t*0.6});
			layer39.velocity({opacity:0},{duration:pub_t*0.5});
			layer34.velocity({rotateX:'10deg',scale:3,translateX:'-200px',translateY:'200px',opacity:0},{duration:pub_t*0.6});
			layer35.velocity({rotateX:'10deg',scale:3,translateX:'-200px',translateY:'200px',opacity:0},{duration:pub_t*0.6});
			layer36.velocity({rotateX:'10deg',scale:3,translateX:'200px',translateY:'200px',opacity:0},{duration:pub_t*0.6});
			layer37.velocity({rotateX:'10deg',scale:3,translateX:'200px',translateY:'200px',opacity:0},{duration:pub_t*0.6});
		}
		if(loop == true){
			p2away();
		}

		var p4in = function(){
			layer51.velocity({translateY:'-550px'},{duration:0}).velocity({translateY:'100px',opacity:1},{duration:pub_t*0.2}).velocity({translateY:'0px'},{duration:pub_t*0.1});
			layer52.velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:0}).velocity({translateX:'10px',translateY:'-5px',opacity:1},{duration:pub_t*0.2,delay:300}).velocity({translateX:'0',translateY:'0px'},{duration:pub_t*0.2});
			layer53.velocity({translateX:'-125px',translateY:'130px',opacity:0},{duration:0}).velocity({translateX:'10px',translateY:'-5px',opacity:1},{duration:pub_t*0.2,delay:500}).velocity({translateX:'0',translateY:'0px'},{duration:pub_t*0.2});
			layer54.velocity({opacity:1},{duration:0});
			layer55.velocity({opacity:1},{duration:0});
			layer545.velocity({scale:'0.3',rotateZ:'120deg'},{duration:0}).velocity({scale:'1.1',rotateZ:'0',opacity:1},{duration:pub_t*0.5}).velocity({scale:'1',rotateZ:'0'},{duration:pub_t*0.2})
			layer55.addClass("allrotate");
			layer56.velocity({translateX:'800px',opacity:0},{duration:0}).velocity({translateX:'-50px',opacity:1},{duration:pub_t*0.3,delay:500}).velocity({translateX:'0px'},{duration:pub_t*0.1});
			layer57.velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:800,delay:1000});
		}
		//p4in();
		setTimeout(function(){p4in();},1000)
	};
}
$(document).ready(function(){
    core(0,false);
    //mac();
});
