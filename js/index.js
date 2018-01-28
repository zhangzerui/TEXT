/**
 * Created by bernlao on 2016/11/15.
 * 首页js
 */



var adopen = true;
MGR.domReady=function(){
    bannerEvt();
    resizeEvt();
    getBetaDay();
    $('.sfea').mouseenter(function () {
        $(this).addClass('hover');
    }).mouseleave(function () {
        $(this).removeClass('hover');
    });

    $('#features li').click(function () {
        var rel = $(this).attr('rel');
        window.open(rel);
    });

    //判断横幅广告
    if($('#bar_op .op_link').attr('href') != '' && MGR.appcookie("_barad_")==""){
        $("#bar_op").show();
        mtj.click('pcmgr.adbar.wannacry.show')
    }

    if(MGR.GetQueryString('showtcss') == 1){
        setTimeout(function () {
            $('[data-stats]').click(function(){
                var tag = 'pcmgr.new.' + $(this).attr('data-stats');
                prompt("上报字段", tag);
            });
        }, 500);
    }
    $('#bar_op .op_link').click(function(){
        mtj.click('pcmgr.adbar.wannacry.click')
    })
}

//banner图尺寸 1920*707
function bannerResize() {
    var scale = 1920 / 627;
    var windowWidth = document.body.scrollWidth;

    //小屏下重叠
    var morefeatures = document.getElementById('more-features');
    if(windowWidth < 1528){
        morefeatures.style.marginBottom = '-15px';
    }else{
        morefeatures.style.marginBottom = '0';
    }

    var domHeight = windowWidth / scale;
    document.getElementById('banner').style.height = domHeight + 'px';
    document.getElementById('banner').style.display = 'block';
//		$('#banner').css('height', height);
}

window.onresize = bannerResize;
bannerResize();

function bannerEvt(){
    var len = $(".banner li").length;
    var index = 0;
    var isrun = true;
    $(".banner li:first").show().css("z-index",1);
    $(".b_dot a").mouseenter(function(){
        if(index!=$(".b_dot a").index(this)){
            index  =  $(".b_dot a").index(this);
            showImg(index);
        }
        isrun = false;
    }).mouseleave(function(){
        isrun = true;
    });
    $('.banner').bind("mouseenter",function(){
        isrun = false;
    });
    $('.banner').bind("mouseleave",function(){
        isrun = true;
    })
    var showImg=function(i){
        $(".banner li,.b_dot a").removeClass("on");
        $(".banner li").eq(i).addClass("on");
        $(".b_dot a").eq(i).addClass("on");
        if (isIE6_8()) {
            $(".banner li").hide();
            $(".banner li").eq(i).show();

        }else{
            $(".banner li").css("z-index",0).fadeOut(600);
            $(".banner li").eq(i).css("z-index",1).fadeIn(600);
        }
    }
//		showImg(0);
    //自动开始
    var MyTime = setInterval(function(){
        if(isrun){
            index++;
            if(index==len){index=0;}
            showImg(index);
        }
    } , 5000);
}

function isIE6_8(){
    return !-[1,] ? true : false;
}

function resizeEvt(){
    $(window).resize(function(){
        $(".figures li .sfea,.figures li .manage").height($(".figures").width()*215/1270);
        if(adopen){
            //$("#adblock").height($("#adpic").height());
            $("#adblock").animate({height:$("#adpic").height()},10);
        }
    });
}

function ad_close(){
    $("#bar_op").hide();
    MGR.appcookie("_barad_","ok",{expires: 1000,path: "/",domain: window.document.location.hostname});
}

function getBetaDay(){
    $.ajax({
        url : gj_port+"//p.guanjia.qq.com/bin/other/date.php?jsonp=1",
        dataType : "jsonp",
        jsonp : "callback",
        type : "get",
        cache : false
    });
}
function timeCallBack(a){
    var d = new Date(a.date * 1000);
    $(".pubtime").html(d.format("yyyy/MM/dd"));
}
//日期格式化
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}

if(typeof(mtj) == 'object'){
    mtj.run().prefix('pcmgr.new');
    mtj.click('pcmgr.new.new_main.index_show');
}
