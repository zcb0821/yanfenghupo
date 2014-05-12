//图片呈现顺序：2、0、1
$(function(){
	var aImg = $('#banner .box img');		//图像集合
	var iSize = aImg.size();				//图像个数
	var index = iSize-1;				//切换索引
	var t;
	//点击焦点图会链接到相应的产品页
	$('#focus').click(function(){
		var focus1opacity=$('#focus1').attr("style").toString();
		var focus2opacity=$('#focus2').attr("style").toString();	
		var focus3opacity=$('#focus3').attr("style").toString();
		if (focus1opacity.indexOf("opacity: 1")!=-1) {
			window.location.href="product-catalog.html?theme=1";
			return;
		};
		if (focus2opacity.indexOf("opacity: 1")!=-1) {
			window.location.href="product-catalog.html?theme=2";
			return;
		};
		if (focus3opacity.indexOf("opacity: 1")!=-1 || focus1opacity.indexOf("opacity=100")!=-1) {
			window.location.href="product-catalog.html?theme=3";
		};
	})
	$('#focus').mouseover(function() {
		clearInterval(int);
	})
	$('#focus').mouseout(function() {
		int=setInterval(autoshow,5000);
	})
	$('#btnLeft').click(function(){			//左边按钮点击
		index--;
		if(index<0){
			index=iSize-1
		}
		change(index)
	})
	$('#btnRight').click(function(){    		//右边按钮点击
		index++;
		if(index>iSize-1){
			index=0
		}
		change(index)
	});
	
	//切换过程
	function change(index){
		aImg.stop();
		aImg.eq(index).siblings().animate({
			opacity:0
		},1000)
		//显示当前图像
		aImg.eq(index).animate({
			opacity:1
		},1000)
	}
	 
	function autoshow() {
		index=index+1;
		if(index<=iSize-1){
		   change(index);
		}else{
			index=0;
			change(index);
		}
	}
	int=setInterval(autoshow,5000);
	function clearInt() {
		$('#btnLeft,#btnRight').mouseover(function() {
			clearInterval(int);
		})
	}
	function setInt() {
		$('#btnLeft,#btnRight').mouseout(function() {
			int=setInterval(autoshow,5000);
		})
	}
	clearInt();
	setInt();
})