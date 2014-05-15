var Level1Series, Level2Function, Level3Origin;
//查看详情之前的左右按钮的模式
//0——都不可用;1——仅左可用;2——仅右可用;3——都可用
var mode;
//标志当前是在目录页还是详情页
//0——目录页;1——详情页
var CataOrDeta=0;

//从三大版块页的超链接获取产品目录的一级分类
function init() {
    disableLeft();
    var URL = document.location.toString();
    var tmp = URL[URL.lastIndexOf("theme") + 6]
    switch(parseInt(tmp)){
        case 1:{
            //雕刻系列
            $('#CurrentTheme').text("雕刻系列");
            $('#level-diaoke').removeAttr("style");
            $('#level-shipin').attr("style", "display: none");
            $('#level-zhuchuan').attr("style", "display: none");
            Level1Series = "雕刻";
            //显示雕刻系列全部产品，与点击"雕刻系列"标签效果相同
            break;
        }
        case 2:{
            //饰品系列
            $('#CurrentTheme').text("饰品系列");
            $('#level-diaoke').attr("style", "display: none");
            $('#level-shipin').removeAttr("style");
            $('#level-zhuchuan').attr("style", "display: none");
            Level1Series = "饰品";
            //显示饰品系列全部产品，与点击"饰品系列"标签效果相同
            break;
        }
        case 3:{
            //珠串系列
            $('#CurrentTheme').text("珠串系列");
            $('#level-diaoke').attr("style", "display: none");
            $('#level-shipin').attr("style", "display: none");
            $('#level-zhuchuan').removeAttr("style");
            Level1Series = "珠串";
            //显示珠串系列全部产品，与点击"珠串系列"标签效果相同
            break;
        }
    }
    if ($("#display").children("img").length > 8) {
        enableRight();
    }
    else {
        disableRight();
    }
}

//用于回到该系列全部图片的目录页
function screen1(level1){
    $.ajax({
        type: "POST",
        url: "/ProductDisplay/",
        data: "series="+level1,
        success: function(result) {
            $("#display").html(result);
            if ($("#display").children("img").length > 8) {
                enableRight();
            }
            else {
                disableRight();
            }
        }
    });
}

//用于二级导航的筛选
function screen2(level1, level2){
    $.ajax({
        type: "POST",
        url: "/ProductDisplay/",
        data: "series="+level1+"&function="+level2,
        success: function(result) {
            $("#display").html(result);
            if ($("#display").children("img").length > 8) {
                enableRight();
            }
            else {
                disableRight();
            }
        }
    });
}

//用于三级导航的筛选
function screen3(level1, level2, level3){
    $.ajax({
        type: "POST",
        url: "/ProductDisplay/",
        data: "series="+level1+"&function="+level2+"&origin="+level3,
        success: function(result) {
            $("#display").html(result);
            if ($("#display").children("img").length > 8) {
                enableRight();
            }
            else {
                disableRight();
            }
        }
    });
}

//按照左导航的筛选显示图片
$(function(){
    //点击“系列”则回到该系列全部图片的目录页
    $("#CurrentTheme").click(function(){
        disableLeft();
        //强行此时为目录模式而非详情模式
        $(".detail").attr("style", "display: none");
        $(".box").removeAttr("style");
        CataOrDeta=0;

        $('.level2chosen').removeClass("level2chosen").addClass("level2");
        if ($(".square2").length) {
            $(".square2~a:first").removeAttr("style");
            $(".square2").removeClass("square2").addClass("square");
        }
        screen1(Level1Series);
    })

    //二级导航的筛选
    $('.level21').click(function(){
        disableLeft();
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        $('.hidden1').toggle();
        $('.hidden2').attr("style", "display: none");
        $('.hidden3').attr("style", "display: none");
        $('.hidden4').attr("style", "display: none");
        $('.level21').removeClass("level2").addClass("level2chosen");
        $('.level22').removeClass("level2chosen").addClass("level2");
        $('.level23').removeClass("level2chosen").addClass("level2");
        $('.level24').removeClass("level2chosen").addClass("level2");
        //二级导航的图片筛选
       if (Level1Series == "雕刻") {
            Level2Function = $('#level-diaoke>.level21>a').text();
        }
        else if (Level1Series == "饰品") {
            Level2Function = $('#level-shipin>.level21>a').text();
        }
        else if (Level1Series == "珠串") {
            Level2Function = $('#level-zhuchuan>.level21>a').text();
        }
        screen2(Level1Series, Level2Function);
    })
    $('.level22').click(function(){
        disableLeft();
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        $('.hidden2').toggle();
        $('.hidden1').attr("style", "display: none");
        $('.hidden3').attr("style", "display: none");
        $('.hidden4').attr("style", "display: none");
        $('.level21').removeClass("level2chosen").addClass("level2");
        $('.level22').removeClass("level2").addClass("level2chosen");
        $('.level23').removeClass("level2chosen").addClass("level2");
        $('.level24').removeClass("level2chosen").addClass("level2");
        //二级导航的图片筛选
       if (Level1Series == "雕刻") {
            Level2Function = $('#level-diaoke>.level22>a').text();
        }
        else if (Level1Series == "饰品") {
            Level2Function = $('#level-shipin>.level22>a').text();
        }
        else if (Level1Series == "珠串") {
            Level2Function = $('#level-zhuchuan>.level22>a').text();
        }
        screen2(Level1Series, Level2Function);
    })
    $('.level23').click(function(){
        disableLeft();
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        $('.hidden3').toggle();
        $('.hidden1').attr("style", "display: none");
        $('.hidden2').attr("style", "display: none");
        $('.hidden4').attr("style", "display: none");
        $('.level21').removeClass("level2chosen").addClass("level2");
        $('.level22').removeClass("level2chosen").addClass("level2");
        $('.level23').removeClass("level2").addClass("level2chosen");
        $('.level24').removeClass("level2chosen").addClass("level2");
        //二级导航的图片筛选
       if (Level1Series == "雕刻") {
            Level2Function = $('#level-diaoke>.level23>a').text();
        }
        else if (Level1Series == "饰品") {
            Level2Function = $('#level-shipin>.level23>a').text();
        }
        else if (Level1Series == "珠串") {
            Level2Function = $('#level-zhuchuan>.level23>a').text();
        }
        screen2(Level1Series, Level2Function);
    })
    $('.level24').click(function(){
        disableLeft();
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        $('.hidden4').toggle();
        $('.hidden1').attr("style", "display: none");
        $('.hidden2').attr("style", "display: none");
        $('.hidden3').attr("style", "display: none");
        $('.level21').removeClass("level2chosen").addClass("level2");
        $('.level22').removeClass("level2chosen").addClass("level2");
        $('.level23').removeClass("level2chosen").addClass("level2");
        $('.level24').removeClass("level2").addClass("level2chosen");
        //二级导航的图片筛选
        Level2Function = $('#level-shipin>.level24>a').text();
        screen2("饰品", $('#level-shipin>.level24>a').text());
    })

    //三级导航的筛选
    $(".level3").click(function(){
        disableLeft();
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        Level3Origin = $(this).children('a').text();
        //上次被选中的三级导航样式复原
        if ($(".square2").length) {
            $(".square2~a:first").removeAttr("style");
            $(".square2").removeClass("square2").addClass("square");
        }
        //本次被选中的三级导航highlight
        var level3Name = $(this).attr("id");
        var tmpStr1="#"+level3Name+">.square";
        var tmpStr2="#"+level3Name+">a";
        $(tmpStr1).removeClass("square").addClass("square2");
        $(tmpStr2).attr("style", "color: #594345");
        screen3(Level1Series ,Level2Function, Level3Origin);
    })

    //点击产品图片查看详情
    $("#display").on('click', '.ProductShow', function(){
        var CurrentSrc = $(this).attr("src");
        enterDetail(CurrentSrc);
    });

    $("#BackToCata").click(function(){
        //切换页面模式
        $(".detail").attr("style", "display: none");
        $(".box").removeAttr("style");
        CataOrDeta=0;
        //根据mode恢复左右按钮状态
        //0——都不可用;1——仅左可用;2——仅右可用;3——都可用
        switch(mode){
            case 1:{enableLeft();break;}
            case 2:{enableRight();break;}
            case 3:{
                enableLeft();
                enableRight();
            }
        }
    })

    //点击左右小三角，滑动查看
	//点击左边按钮
	$('#btnLeft').click(function(){
        if (CataOrDeta==0) {
            //当前在目录页
            if ($('#btnLeft').attr("class")=="btnLeft2") {
                return;
            };
	        var flag = 0;
	        //已保证可以向左滑动
            var LeftMost = $("#display>.ProductBg:first").css("left").replace(/px/, "");
            if (Number(LeftMost) == -360) {
                flag = 1;
            }
            $(".ProductBg").animate({left:'+=360px'});
            $(".ProductShow").animate({left:'+=360px'});
            $(".DisplayName").animate({left:'+=360px'});
	        enableRight();
	        if (flag == 1) {
	        	disableLeft();
	        }
        }
	});
	//点击右边按钮
	$('#btnRight').click(function(){
        if (CataOrDeta==0) {
            //当前在目录页
            if ($('#btnRight').attr("class")=="btnRight2") {
                return;
            };
	        var flag = 0;
	        //已保证可以向左滑动
            var LeftMost = $("#display>.ProductBg:first").css("left").replace(/px/, "");
            var standard = -($("#display").children("img").length/2-3)*180;
            if (Number(LeftMost) == standard || Number(LeftMost) == standard + 180) {
                flag = 1;
            }
            $(".ProductBg").animate({left:'-=360px'});
            $(".ProductShow").animate({left:'-=360px'});
            $(".DisplayName").animate({left:'-=360px'});
	        enableLeft();
	        if (flag == 1) {
	        	disableRight();
	        }
        }
	});
});

//点击图片进入详情页
function enterDetail(CurrentSrc){
    //切换页面模式
    CataOrDeta=1;
    $(".box").attr("style", "display: none");
    $(".detail").removeAttr("style");
    //利用mode变量记录进入详情页之前的左右按钮可用情况
    //0——都不可用;1——仅左可用;2——仅右可用;3——都可用
    if ($('#btnLeft').attr("class")=="btnLeft1") {
        if ($('#btnRight').attr("class")=="btnRight1") {
            mode=3;
        }
        else{mode=1;}
    }
    else{
        if ($('#btnRight').attr("class")=="btnRight1") {
            mode=2;
        }
        else{mode=0;}
    }
    //详情图片的url
    var DetailUrl=CurrentSrc;
    ////判断当前图片是否为当前目录的第一/最后一张，从而设置左右箭头是否可用?????
    var KeyName=DetailUrl.substring(DetailUrl.indexOf("【")+1, DetailUrl.indexOf("】"));
    DetailUrl=DetailUrl.replace(/product-catalog/, "product-detail");
    DetailUrl=DetailUrl.replace(/.png/, ".jpg");
    $('#DetailProductPicture').attr("src", DetailUrl);
    $('#DetailProductPreview').attr("src", DetailUrl);

    //详情图片的名称
    $.ajax({
        type: "POST",
        url: "/ProductDetail/",
        data: "display_name="+KeyName,
        success: function(result) {
            $('#DetailName1>a').text(KeyName);
            $('#DetailName2>a').text(result);
        }
    });
}

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