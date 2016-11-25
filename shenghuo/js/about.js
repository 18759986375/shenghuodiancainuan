    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?3c551a9fd0afe21ae3a75c9e39f60966";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();

    function GetQueryString(name)//这个方法去获得get参数
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    function load(){
        document.getElementById((GetQueryString("btn"))).click();
    }
    
	$(".navbar").children().eq(5).addClass('active');
	$("#tab").children().click(function() {
		$(this).addClass('select').siblings().removeClass('select');
		$(this).children('em').addClass('sel').parent().siblings().children('em').removeClass('sel');
		var index = $(this).index();
		$(".brief").eq(index).css({"display" : "block"}).siblings(".brief").css({"display" : "none"});
		$("#topnav").html($(this).children('span').html());
	});


	// 百度地图API功能
    var map = new BMap.Map("divMap");
    map.centerAndZoom(new BMap.Point(116.284, 40.015), 11);

    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    /*缩放控件type有四种类型:
    BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
    
        map.addControl(top_left_control);        
        map.addControl(top_left_navigation);     
        map.addControl(top_right_navigation);    
        
    //可以转化gps坐标
    var mapWforGPS = new BMapLib.MapWrapper(map, BMapLib.COORD_TYPE_GPS); 
    
    //可以转化google坐标
    var mapWforGoogle = new BMapLib.MapWrapper(map, BMapLib.COORD_TYPE_GOOGLE); 
    for(var i = 0; i < 1; i++){
        
        //添加gps坐标mkr
        var gpsMkr = new BMap.Marker(new BMap.Point(/*GPS坐标*/116.46838397, 39.85625908));
                
        (function(i){
            gpsMkr.addEventListener("click", function(){
                var strXY = this.getPosition().lng.toFixed(3) + ", " + this.getPosition().lat.toFixed(3);
                var infoWin = new BMap.InfoWindow("这里是我公司位置");
                this.openInfoWindow(infoWin);
            });
        })(i);
        
        mapWforGPS.addOverlay(gpsMkr);
    }