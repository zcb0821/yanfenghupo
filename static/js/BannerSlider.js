//图片呈现顺序：2、0、1
$(function(){
	var aImg = $('#banner .box img');		//图像集合
	var iSize = aImg.size();				//图像个数
	var index = iSize-1;				//切换索引
	var t;
	//点击焦点图会链接到相应的产品页
	$('#focus').click(function(){
		if ($('#focus1').css('opacity') == 1 && $('#focus2').css('opacity') == 1  && $('#focus3').css('opacity') == 1 ) {
			window.location.href="/product/theme/3/";
			return;
		}
		if ($('#focus1').css('opacity') == 1) {
			window.location.href="/product/theme/1/";
			return;
		}
		if ($('#focus2').css('opacity') == 1) {
			window.location.href="/product/theme/2/";
			return;
		}
		window.location.href="/product/theme/3/";
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

    $('#language').click(function(){
        var $this = $(this);
        if ($this.attr('lang') == 'Chinese'){

        } else if ($this.attr('lang') == 'Chinese'){

        }
    })
})