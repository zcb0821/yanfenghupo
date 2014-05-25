$(function(){
	$("#zhanhui").click(function(){
		$("#zhanhui").removeClass("level2").addClass("level2chosen");
		$("#zhantinghuodong").removeClass("level2chosen").addClass("level2");
		$("#CurrentTheme").text("展会");
		$('#leftward').addClass("hide");
		$('#rightward').addClass("hide");
		$('#HallCata').addClass("hide");
		$('#Event1replace').removeClass("hide");
		$('#Event2replace').removeClass("hide");
		$('#EventReplace11').addClass("hide");
		$('#EventReplace12').addClass("hide");
		$('#EventReplace13').addClass("hide");
		$('#EventReplace14').addClass("hide");
		$('#EventReplace15').addClass("hide");
		$('#EventReplace21').addClass("hide");
		$('#EventReplace22').addClass("hide");
		$('#EventReplace23').addClass("hide");
		$('#EventReplace24').addClass("hide");
		$('#EventReplace25').addClass("hide");
		$('#EventReplace26').addClass("hide");
		$('#EventReplace27').addClass("hide");
		$('#EventReplace28').addClass("hide");
		$('#EventReplace29').addClass("hide");
	})
	$("#zhantinghuodong").click(function(){
		$("#zhantinghuodong").removeClass("level2").addClass("level2chosen");
		$("#zhanhui").removeClass("level2chosen").addClass("level2");
		$("#CurrentTheme").text("展厅活动");
		$('#leftward').removeClass("hide");
		$('#rightward').removeClass("hide");
		$('#HallCata').removeClass("hide");
		$('#Event1replace').addClass("hide");
		$('#Event2replace').addClass("hide");
		$('#EventReplace11').addClass("hide");
		$('#EventReplace12').addClass("hide");
		$('#EventReplace13').addClass("hide");
		$('#EventReplace14').addClass("hide");
		$('#EventReplace15').addClass("hide");
		$('#EventReplace21').addClass("hide");
		$('#EventReplace22').addClass("hide");
		$('#EventReplace23').addClass("hide");
		$('#EventReplace24').addClass("hide");
		$('#EventReplace25').addClass("hide");
		$('#EventReplace26').addClass("hide");
		$('#EventReplace27').addClass("hide");
		$('#EventReplace28').addClass("hide");
		$('#EventReplace29').addClass("hide");
	})
	$("#Event1replace").click(function(){
		mode = 1;
		$('#leftward').removeClass("hide");
		$('#rightward').removeClass("hide");
		enableRight();
		$('#HallCata').addClass("hide");
		$('#Event1replace').addClass("hide");
		$('#Event2replace').addClass("hide");
		$('#EventReplace11').removeClass("hide");
		$('#EventReplace12').removeClass("hide");
		$('#EventReplace13').removeClass("hide");
		$('#EventReplace14').removeClass("hide");
		$('#EventReplace15').removeClass("hide");
		$('#EventReplace21').addClass("hide");
		$('#EventReplace22').addClass("hide");
		$('#EventReplace23').addClass("hide");
		$('#EventReplace24').addClass("hide");
		$('#EventReplace25').addClass("hide");
		$('#EventReplace26').addClass("hide");
		$('#EventReplace27').addClass("hide");
		$('#EventReplace28').addClass("hide");
		$('#EventReplace29').addClass("hide");
	})
	$("#Event2replace").click(function(){
		mode = 2;
		$('#leftward').removeClass("hide");
		$('#rightward').removeClass("hide");
		enableRight();
		$('#HallCata').addClass("hide");
		$('#Event1replace').addClass("hide");
		$('#Event2replace').addClass("hide");
		$('#EventReplace11').addClass("hide");
		$('#EventReplace12').addClass("hide");
		$('#EventReplace13').addClass("hide");
		$('#EventReplace14').addClass("hide");
		$('#EventReplace15').addClass("hide");
		$('#EventReplace21').removeClass("hide");
		$('#EventReplace22').removeClass("hide");
		$('#EventReplace23').removeClass("hide");
		$('#EventReplace24').removeClass("hide");
		$('#EventReplace25').removeClass("hide");
		$('#EventReplace26').removeClass("hide");
		$('#EventReplace27').removeClass("hide");
		$('#EventReplace28').removeClass("hide");
		$('#EventReplace29').removeClass("hide");
	})
	//点击左右小三角，滑动查看
	//点击左边按钮
	$('#btnLeft').click(function(){
	        if ($('#btnLeft').attr("class")=="btnLeft2") {
	            return;
	        };
	        var flag = 0;
	        //已保证可以向左滑动
	        if (mode == 1) {
		        var first = $("#EventReplace11").css("left").replace(/px/, "");
		        if (Number(first) == -440) {
		        	flag = 1;
		        }
		        $("#EventReplace11").animate({left:'+=440px'});
		        $("#EventReplace12").animate({left:'+=440px'});
		        $("#EventReplace13").animate({left:'+=440px'});
		        $("#EventReplace14").animate({left:'+=440px'});
		        $("#EventReplace15").animate({left:'+=440px'});
	        }
	        else {
		        var first = $("#EventReplace21").css("left").replace(/px/, "");
		        if (Number(first) == -440) {
		        	flag = 1;
		        }
		        $("#EventReplace21").animate({left:'+=440px'});
		        $("#EventReplace22").animate({left:'+=440px'});
		        $("#EventReplace23").animate({left:'+=440px'});
		        $("#EventReplace24").animate({left:'+=440px'});
		        $("#EventReplace25").animate({left:'+=440px'});
		        $("#EventReplace26").animate({left:'+=440px'});
		        $("#EventReplace27").animate({left:'+=440px'});
		        $("#EventReplace28").animate({left:'+=440px'});
		        $("#EventReplace29").animate({left:'+=440px'});
	        }
	        enableRight();
	        if (flag == 1) {
	        	disableLeft();
	        }
	});
	//点击右边按钮
	$('#btnRight').click(function(){
	        if ($('#btnRight').attr("class")=="btnRight2") {
	            return;
	        };
	        var flag = 0;
	        //已保证可以向右滑动
	        if (mode == 1) {
		        var fifth = $("#EventReplace15").css("left").replace(/px/, "");
		        if (Number(fifth) == 440) {
		        	flag = 1;
		        }
		        $("#EventReplace11").animate({left:'-=440px'});
		        $("#EventReplace12").animate({left:'-=440px'});
		        $("#EventReplace13").animate({left:'-=440px'});
		        $("#EventReplace14").animate({left:'-=440px'});
		        $("#EventReplace15").animate({left:'-=440px'});
	        }
	        else {
		        var ninth = $("#EventReplace29").css("left").replace(/px/, "");
		        if (Number(ninth) == 440) {
		        	flag = 1;
		        }
		        $("#EventReplace21").animate({left:'-=440px'});
		        $("#EventReplace22").animate({left:'-=440px'});
		        $("#EventReplace23").animate({left:'-=440px'});
		        $("#EventReplace24").animate({left:'-=440px'});
		        $("#EventReplace25").animate({left:'-=440px'});
		        $("#EventReplace26").animate({left:'-=440px'});
		        $("#EventReplace27").animate({left:'-=440px'});
		        $("#EventReplace28").animate({left:'-=440px'});
		        $("#EventReplace29").animate({left:'-=440px'});
	        }
	        enableLeft();
	        if (flag == 1) {
	        	disableRight();
	        }
	});
});

//左右箭头的有效性
//左箭头生效
function enableLeft(){
    $('#btnLeft').attr("href", "javascript:void(0);");
    $('#btnLeft').removeClass("btnLeft2");
    $('#btnLeft').addClass("btnLeft1");
}
//左箭头失效
function disableLeft(){
    $('#btnLeft').removeAttr("href");
    $('#btnLeft').removeClass("btnLeft1");
    $('#btnLeft').addClass("btnLeft2");
}
//右箭头生效
function enableRight(){
    $('#btnRight').attr("href", "javascript:void(0);");
    $('#btnRight').removeClass("btnRight2");
    $('#btnRight').addClass("btnRight1");
}
//右箭头失效
function disableRight(){
    $('#btnRight').removeAttr("href");
    $('#btnRight').removeClass("btnRight1");
    $('#btnRight').addClass("btnRight2");
}