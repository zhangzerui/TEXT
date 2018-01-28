var defaultSid = '1600';
var REF = {
	referer_url:document.referrer,
	local_url:window.location.href.toLowerCase(),
	page_index:document.getElementsByTagName("body")[0].getAttribute("pageindex"),
	adtag_map:[
		{"adtag":"media.buy.baidu.SEMLJGD","sid":1438},
		{"adtag":"media.buy.baidu.SEMDNQLJS","sid":1438},
		{"adtag":"media.buy.baidu.SEMYJSD","sid":1438},
		{"adtag":"media.buy.baidu.SEMXZ4","sid":1438},
		{"adtag":"media.buy.baidu.SEMXZ3","sid":1438},
		{"adtag":"media.buy.baidu.SEMXZ2","sid":1438},
		{"adtag":"media.buy.baidu.SEMDNAQ","sid":1438},
		{"adtag":"media.buy.baidu.SEMLDXF","sid":1438},
		{"adtag":"media.buy.baidu.SEMKJJS","sid":1438},
		{"adtag":"media.buy.baidu.SEMEYGGQL","sid":1438},
		{"adtag":"media.buy.baidu.SEM2018xz","sid":1438},
		{"adtag":"media.buy.baidu.SEMXZ","sid":1439},
		{"adtag":"media.buy.sogo.SEMPP","sid":1442},
		{"adtag":"media.buy.sogo.SEMTY","sid":1443},
		{"adtag":"media.buy.sogo.SEMJP","sid":1444},
		{"adtag":"media.buy.sogo.SEMPPTY","sid":1445},
		{"adtag":"media.buy.sogo.SEMTOP1","sid":1446},
		{"adtag":"media.buy.sogo.SEMTOP2","sid":1447},
		{"adtag":"media.buy.sogo.SEMTOP3","sid":1448},
		{"adtag":"media.buy.baidu.sem","sid":1454},
		{"adtag":"media.buy.baidu.txdngjsem","sid":1459},
		{"adtag":"media.buy.baidu.dngjsem","sid":1460},
		{"adtag":"media.buy.baidu.dngjxzsem","sid":1333},
		{"adtag":"media.buy.baidu.txgjsem","sid":1334},
		{"adtag":"media.buy.baidu.qqdngjsem","sid":1335},
		{"adtag":"media.buy.sem.tongyong","sid":1359},
		{"adtag":"media.buy.sem.pinpai","sid":1360},
		{"adtag":"media.buy.bing.SEMPPC","sid":1462},
		{"adtag":"media.buy.bing.SEMTYC","sid":1463},
		{"adtag":"media.buy.bing.SEMJPC","sid":1464},
		{"adtag":"media.buy.bing.SEMTOP1","sid":1465},
		{"adtag":"media.buy.bing.SEMTOP2","sid":1466},
		{"adtag":"media.buy.bing.SEMTOP3","sid":1467},
		{"adtag":"media.buy.bing.SEMTOP4","sid":1468},
		{"adtag":"media.buy.bing.SEMXZCGZ","sid":1469},
		{"adtag":"media.buy.bing.SEMXZCGZ","sid":1470},
		{"adtag":"media.buy.sogo.SEMXZPPC","sid":1471},
		{"adtag":"media.buy.sogo.SEMXZTYC","sid":1472},
		{"adtag":"media.buy.sogo.SEMTOP5","sid":1473},
		{"adtag":"media.buy.sogo.SEMTOP6","sid":1474},
		{"adtag":"media.buy.sogo.SEMTOP7","sid":1475},
		{"adtag":"media.buy.sogo.SEO1","sid":1488},
		{"adtag":"media.buy.sogo.SEO2","sid":1489},
		{"adtag":"media.buy.sogo.SEO3","sid":1490},
		{"adtag":"media.buy.sogo.SEO4","sid":1491},
		{"adtag":"media.buy.sogo.SEO5","sid":78780},
		{"adtag":"media.buy.sogo.SEO6","sid":78781},
		{"adtag":"media.buy.sogo.SEO7","sid":78782},
		{"adtag":"media.buy.sogo.SEO8","sid":78783},
		{"adtag":"media.buy.sogo.SEO9","sid":78772},
		{"adtag":"media.buy.google.SEM1","sid":1340},
		{"adtag":"media.buy.google.SEM2","sid":1341},
		{"adtag":"media.buy.newway.order1","sid":1410,"outseo":true},
		{"adtag":"media.buy.newway.order2","sid":1451,"outseo":true},
		{"adtag":"media.buy.newway.order3","sid":1498,"outseo":true},
		{"adtag":"media.innercop.tgp.clinet_qdy","sid":78893,"outseo":true},
		{"adtag":"media.buy.sogo.seo9","sid":78772,"outseo":true},
		{"adtag":"media.buy.baidu_xinxiliu1","sid":1589},
		{"adtag":"media.buy.baidu_xinxiliu2","sid":1590},
		{"adtag":"media.buy.baidu_xinxiliu3","sid":1591},
		{"adtag":"media.buy.baidu_xinxiliu4","sid":1592},
		{"adtag":"media.buy.baidu_xinxiliu5","sid":1593},
		{"adtag":"innerenter.weiboresou","sid":1389},
		{"adtag":"media.buy.baidu_zuijinwendang","sid":70404},
		{"adtag":"media.buy.baidu.dingtou1","sid":110019},
		{"adtag":"media.buy.baidu.dingtou2","sid":110020},
		{"adtag":"media.buy.zhishiyinxiao1","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao2","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao3","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao4","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao5","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao6","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao7","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao8","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao9","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao10","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao11","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao12","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao13","sid":110018},
		{"adtag":"media.buy.zhishiyinxiao14","sid":110018},
		{"adtag":"media.buy.sogou.pingpai1","sid":110027},
		{"adtag":"media.buy.sogou.pingpai2","sid":110028},
		{"adtag":"media.buy.sogou.tongyong1","sid":110029},
		{"adtag":"media.buy.baidu.tongyong2","sid":110030},
		{"adtag":"media.buy.baidu.shadu1","sid":110032},
		{"adtag":"media.buy.baidu.shadu2","sid":110033},
		{"adtag":"media.buy.baidu.pingpai1","sid":110034},
		{"adtag":"media.buy.baidu.pingpai2","sid":110035},
		{"adtag":"media.jingdong.pubg","sid":1646}
	],

	fix_download:function(){
		if(REF.page_index==0){

		}else if(REF.page_index==1){
			if(REF.referer_url){
				if(REF.referer_url.indexOf(".baidu.com")>=0 || REF.referer_url.indexOf(".soso.com")>=0 || REF.referer_url.indexOf(".so.com")>=0 || REF.referer_url.indexOf(".sogou.com")>=0|| REF.referer_url.indexOf(".bing.com")>=0|| REF.referer_url.indexOf(".hao123.com")>=0){
					//搜索引擎来源
					var seo_flag = true;
					for(var i=0; i<REF.adtag_map.length; i++){
						if(REF.GetQueryString('ADTAG') && (REF.adtag_map[i].adtag.toLowerCase()==REF.GetQueryString('ADTAG').toLowerCase())){
							REF.set_download(REF.adtag_map[i].sid);
							seo_flag = false;
							break;
						}
					}
					if(seo_flag){
						REF.set_download(1602);
					}
				}else if(REF.referer_url.indexOf("guanjia.qq.com")>=0){
					if(REF.referer_url.indexOf("guanjia.qq.com/act/")>=0){
						if(REF.local_url.indexOf("web.gj.hddaohang.logo")>=0){
							REF.set_download(1307);
						}else{
							REF.set_download(1306);
						}
					}else{
						REF.set_download(defaultSid);
					}
				}else{
					if(REF.local_url.indexOf("cop.innercop.aio.logo")>=0){
						REF.set_download(71664);
					}else if(REF.local_url.indexOf("cop.innercop.aio.wenzilian")>=0){
						REF.set_download(71665);
					}else if(REF.local_url.indexOf("news.qqcom")>=0){
						REF.set_download(74652);
					}else{
						REF.set_download(defaultSid);
					}
				}
			}else{
				//无referer，只判断adtag来源，不判断outseo了
				var tag_flag = true;
				for(var j=0; j<REF.adtag_map.length; j++){
					if(REF.GetQueryString('ADTAG') && (REF.adtag_map[j].adtag.toLowerCase()==REF.GetQueryString('ADTAG').toLowerCase())){
						REF.set_download(REF.adtag_map[j].sid);
						tag_flag = false;
						break;
					}
				}
			   	if(tag_flag){
				   REF.set_download(defaultSid);
				}
			}
		}
	},
	set_download:function(sid){
		var f = document.getElementById("banner");
		var d = REF.getByClass(f,"banner_download");
		for (var i=0 ;i<d.length;i++){
			d[i].setAttribute("href","https://pm.myapp.com/invc/xfspeed/qqpcmgr/download/QQPCDownload"+sid+".exe");
			d[i].setAttribute("data-stats","new_main.gjdownload_"+sid);
		}

		pgvSendClick({hottag:'pcmgr.new.referer.show_'+sid});
		mtj.click('pcmgr.new.referer.show_'+sid);
	},
	getByClass:function(oParent, sClass){
            var aEle=oParent.getElementsByTagName('*');
            var aResult=[];
            var re=new RegExp('\\b'+sClass+'\\b', 'i');
            var i=0;
            for(i=0;i<aEle.length;i++){
                    if(re.test(aEle[i].className)){
                            aResult.push(aEle[i]);
                    }
            }
            return aResult;
    },
	GetQueryString:function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return encodeURIComponent(r[2]); return null;
	}
}
//加载点击流后再开始
var tt = setInterval(function(){
	if(typeof(pgvMain) == 'function'){
		clearInterval(tt);
		REF.fix_download();
	}
},500);
