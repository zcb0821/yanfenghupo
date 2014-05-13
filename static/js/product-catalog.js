var img111=new Array("【云芝】·蜜蜡", "【天禄】·蜜蜡", "【珠玉满堂】·蜜蜡", 
"【风仪】·蜜蜡", "【鹤鹤有鸣】·蜜蜡");//雕刻-摆件-波罗的海111
var str111="/static/images/product-catalog/product-display/雕刻/摆件/波罗的海/";
var img112=new Array("【凤赫于鸣】·蓝珀");//雕刻-摆件-缅甸112
var str112="/static/images/product-catalog/product-display/雕刻/摆件/缅甸/";
var img113=new Array("【一笑千年】·蓝珀");//雕刻-摆件-墨西哥113
var str113="/static/images/product-catalog/product-display/雕刻/摆件/墨西哥/";

//雕刻-雕刻件
var img121=new Array("【鱼跃】·蓝珀", "【长生】·蓝珀");//雕刻-雕刻件-多米尼加121
var str121="/static/images/product-catalog/product-display/雕刻/雕刻件/多米尼加/";
var img122=new Array("【蓝姬】·蓝珀","【子幼】·蓝珀");//雕刻-雕刻件-缅甸122
var str122="/static/images/product-catalog/product-display/雕刻/雕刻件/缅甸/";

//雕刻-手把件
var img131=new Array("【武财神】·蜜蜡","【众生】·蜜蜡");//雕刻-手把件-波罗的海131
var str131="/static/images/product-catalog/product-display/雕刻/手把件/波罗的海/";


//饰品-编织特色
var img211=new Array("【千年】·老蜜108佛珠", "【垂衣】·老蜜鼓珠", "【夜华】·血珀", 
"【寸光】·老蜜蜡", "【拈花】·双色108佛珠", "【明堂】·老蜜蜡", "【星耀】·血珀", 
"【玛尼】·老蜜蜡", "【福运】·双色", "【红豆】·血珀", "【金魄】·蜜蜡");//饰品-编织特色-波罗的海211
var str211="/static/images/product-catalog/product-display/饰品/编织特色/波罗的海/";

//饰品-吊坠
var img221=new Array("【冥思】·蜜蜡", "【出兜率天】·蜜蜡", "【初雨】·蜜蜡", 
"【沁甜】·蜜蜡", "【沉鱼】·蜜蜡","【甘瓠蜜】·蜜蜡", "【蝶恋】·蜜蜡", 
"【迷醉】·蜜蜡", "【鱼生】·白蜜蜡");//饰品-吊坠-波罗的海221
var str221="/static/images/product-catalog/product-display/饰品/吊坠/波罗的海/";
var img222=new Array("【钟情】·蓝珀");//饰品-吊坠-多米尼加222
var str222="/static/images/product-catalog/product-display/饰品/吊坠/多米尼加/";
var img223=new Array("【海蓝】·蓝珀", "【喜上梅梢】·蓝珀");//饰品-吊坠-缅甸223
var str223="/static/images/product-catalog/product-display/饰品/吊坠/缅甸/";

//饰品-戒指和耳钉
var img231=new Array("【为你】·蓝珀", "【一世】·蓝珀");//饰品-戒指和耳钉-多米尼加231
var str231="/static/images/product-catalog/product-display/饰品/戒指和耳钉/多米尼加/";

//饰品-手镯
var img241=new Array("【缓缓归】·老蜜蜡", "【陌上花】·白蜜蜡");//饰品-手镯-波罗的海241
var str241="/static/images/product-catalog/product-display/饰品/手镯/波罗的海/";
var img242=new Array("【蓝翎】·蓝珀");//饰品-手镯-墨西哥242
var str242="/static/images/product-catalog/product-display/饰品/手镯/墨西哥/";


//珠串-佛珠
var img311=new Array("【光炫】·金珀", "【莲华】·老蜜蜡", "【琴易】·双色");//珠串-佛珠-波罗的海311
var str311="/static/images/product-catalog/product-display/珠串/佛珠/波罗的海/";
var img312=new Array("【幻泪】·蓝珀");//珠串-佛珠-多米尼加312
var str312="/static/images/product-catalog/product-display/珠串/佛珠/多米尼加/";

//珠串-手串
var img321=new Array("【思韵】·老蜜蜡", "【神现】·白花", "【重灵】·老蜜蜡", "【阑珊】·血珀");//珠串-手串-波罗的海321
var str321="/static/images/product-catalog/product-display/珠串/手串/波罗的海/";
var img322=new Array("【池眠】·蓝珀");//珠串-手串-多米尼加322
var str322="/static/images/product-catalog/product-display/珠串/手串/多米尼加/";


var img1=new Array(img111, img112, img113, img121, img122, img131);
var img2=new Array(img211, img221, img222, img223, img231, img241, img242);
var img3=new Array(img311, img312, img321, img322);
var str1=new Array(str111, str112, str113, str121, str122, str131);
var str2=new Array(str211, str221, str222, str223, str231, str241, str242);
var str3=new Array(str311, str312, str321, str322);
var ImgStr=new Array();//最终要显示的图片url集合
var ImgStrAll=new Array();//该主题所有的图片url集合的备份
var name1=new Array();//图片名称前半部分
var name2=new Array();//图片名称后半部分
var size;//集合ImgStr的大小，当前筛选出的图片数目
var BgStr1="/static/images/product-catalog/bg";
var BgStr2=".png";
var index=0;
//查看详情之前的左右按钮的模式
//0——都不可用;1——仅左可用;2——仅右可用;3——都可用
var mode;
//标志当前是在目录页还是详情页
//0——目录页;1——详情页
var CataOrDeta=0;


//雕刻-摆件
var imgD111=new Array("【云芝】蜜蜡灵芝小摆件·波罗的海", "【天禄】蜜蜡貔貅小摆件·波罗的海", 
"【珠玉满堂】蜜蜡摆件·波罗的海", "【风仪】蜜蜡牡丹花小摆件·波罗的海", 
"【鹤鹤有鸣】蜜蜡摆件·波罗的海");//雕刻-摆件-波罗的海111
var imgD112=new Array("【凤赫于鸣】金蓝百鸟朝凤摆件·缅甸");//雕刻-摆件-缅甸112
var imgD113=new Array("【一笑千年】蓝绿布袋佛摆件·墨西哥");//雕刻-摆件-墨西哥113

//雕刻-雕刻件
var imgD121=new Array("【鱼跃】蓝珀雕刻件·多米尼加", "【长生】蓝珀雕刻件·多米尼加");//雕刻-雕刻件-多米尼加121
var imgD122=new Array("【蓝姬】蓝绿雕刻件·缅甸","【子幼】蓝绿雕刻件·缅甸");//雕刻-雕刻件-缅甸122

//雕刻-手把件
var imgD131=new Array("【武财神】蜜蜡关公手把件·波罗的海","【众生】蜜蜡笑佛手把件·波罗的海");//雕刻-手把件-波罗的海131


//饰品-编织特色
var imgD211=new Array("【千年】老蜜108佛珠·波罗的海", "【垂衣】老蜜鼓珠·波罗的海", 
"【夜华】血珀手串·波罗的海", "【寸光】老蜜桶珠·波罗的海", "【拈花】双色108佛珠·波罗的海", 
"【明堂】老蜜手串·波罗的海", "【星耀】血珀手串·波罗的海", "【玛尼】老蜜蜡手串·波罗的海", 
"【福运】双色手串·波罗的海", "【红豆】血珀手串·波罗的海", "【金魄】蜜蜡手串·波罗的海");//饰品-编织特色-波罗的海211

//饰品-吊坠
var imgD221=new Array("【冥思】观音蜜蜡吊坠·波罗的海", "【出兜率天】佛蜜蜡吊坠·波罗的海", 
"【初雨】双鱼蜜蜡吊坠·波罗的海", "【沁甜】南瓜金包蜜吊坠-波罗的海", 
"【沉鱼】蜜蜡吊坠·波罗的海", "【甘瓠蜜】葫芦金绞蜜吊坠·波罗的海", 
"【蝶恋】蜜蜡吊坠·波罗的海", "【迷醉】玫瑰花蜜蜡吊坠·波罗的海", "【鱼生】白蜜蜡吊坠·波罗的海");//饰品-吊坠-波罗的海221
var imgD222=new Array("【钟情】蓝珀吊坠·多米尼加");//饰品-吊坠-多米尼加222
var imgD223=new Array("【海蓝】金蓝平安扣·缅甸", "【喜上梅梢】金蓝吊坠·缅甸");//饰品-吊坠-缅甸223

//饰品-戒指和耳钉
var imgD231=new Array("【为你】蓝珀耳钉·多米尼加", "【一世】蓝珀戒指·多米尼加");//饰品-戒指和耳钉-多米尼加231

//饰品-手镯
var imgD241=new Array("【缓缓归】老蜜蜡手镯·波罗的海", "【陌上花】白蜜蜡手镯·波罗的海");//饰品-手镯-波罗的海241
var imgD242=new Array("【蓝翎】蓝绿手镯·墨西哥");//饰品-手镯-墨西哥242


//珠串-佛珠
var imgD311=new Array("【光炫】金珀108粒佛珠·波罗的海", "【莲华】老蜜108粒佛珠·波罗的海", 
"【琴易】双色108粒佛珠·波罗的海");//珠串-佛珠-波罗的海311
var imgD312=new Array("【幻泪】蓝珀108粒佛珠·多米尼加");//珠串-佛珠-多米尼加312

//珠串-手串
var imgD321=new Array("【思韵】老蜜蜡鸡油黄桶珠·波罗的海", "【神现】白花手串·波罗的海", 
"【重灵】老蜜蜡手串·波罗的海", "【阑珊】血珀手串·波罗的海");//珠串-手串-波罗的海321
var imgD322=new Array("【池眠】蓝珀手串·多米尼加");//珠串-手串-多米尼加322

var ImgDAll=imgD111.concat(imgD112, imgD113, imgD121, imgD122, imgD131, imgD211, 
    imgD221, imgD222, imgD223, imgD231, imgD241, imgD242, imgD311, imgD312, imgD321, imgD322);

//从三大版块页的超链接获取产品目录的一级分类
function init() {
    var tmpArray, QueryString;
    var URL = document.location.toString();
    QueryString = URL.substring(URL.lastIndexOf("?") + 1, URL.length);
    tmpArray = QueryString.split("=");
    switch(parseInt(tmpArray[1])){
        case 1:{
            //雕刻系列
            $('#CurrentTheme').text("雕刻系列");
            $('#level-diaoke').removeAttr("style");
            $('#level-shipin').attr("style", "display: none");
            $('#level-zhuchuan').attr("style", "display: none");
            //显示雕刻系列全部产品，与点击"雕刻系列"标签效果相同
            for (var i = 0; i < str1.length; i++) {
                for (var j = 0; j < img1[i].length; j++) {
                    ImgStr.push(str1[i]+img1[i][j]+".png");
                    ImgStrAll.push(str1[i]+img1[i][j]+".png");
                }
            }
            break;
        }
        case 2:{
            //饰品系列
            $('#CurrentTheme').text("饰品系列");
            $('#level-diaoke').attr("style", "display: none");
            $('#level-shipin').removeAttr("style");
            $('#level-zhuchuan').attr("style", "display: none");
            //显示饰品系列全部产品，与点击"饰品系列"标签效果相同
            for (var i = 0; i < str2.length; i++) {
                for (var j = 0; j < img2[i].length; j++) {
                    ImgStr.push(str2[i]+img2[i][j]+".png");
                    ImgStrAll.push(str2[i]+img2[i][j]+".png");
                }
            }
            break;
        }
        case 3:{
            //珠串系列
            $('#CurrentTheme').text("珠串系列");
            $('#level-diaoke').attr("style", "display: none");
            $('#level-shipin').attr("style", "display: none");
            $('#level-zhuchuan').removeAttr("style");
            //显示珠串系列全部产品，与点击"珠串系列"标签效果相同
            for (var i = 0; i < str3.length; i++) {
                for (var j = 0; j < img3[i].length; j++) {
                    ImgStr.push(str3[i]+img3[i][j]+".png");
                    ImgStrAll.push(str3[i]+img3[i][j]+".png");
                }
            }
            break;
        }
    }
    initShow(ImgStr);
}

//按照ImgStr中的url将图片依次显示出来
function initShow(urls){
    size=urls.length;
    //提取图片名称，保存到数组name1和name2中
    var tmpname1=new Array();//图片名称前半部分
    var tmpname2=new Array();//图片名称后半部分
    for (var i = 0; i < urls.length; i++) {
        tmpname1.push(urls[i].substring(urls[i].indexOf("【")+1, urls[i].indexOf("】")));
        tmpname2.push(urls[i].substring(urls[i].indexOf("】")+1, urls[i].indexOf(".")));
    };
    name1=tmpname1;
    name2=tmpname2;
    index=0;
    disableLeft();
    change(urls);
}

//产品图片切换过程
function change(urls){
    $('#bg1').removeClass("hide");
    $('#ProductShow1').removeClass("hide");
    $('#ProductShow1').attr("src", urls[index]);
    NameShow1(index);
    //只有第一栏
    if (index+1 >= size) {
        $('#ProductShow2').removeAttr("src");
        $('#ProductShow2').addClass("hide");
        $('#bg2').addClass("hide");
        $('#ProductShow3').removeAttr("src");
        $('#ProductShow3').addClass("hide");
        $('#bg3').addClass("hide");
        $('#ProductShow4').removeAttr("src");
        $('#ProductShow4').addClass("hide");
        $('#bg4').addClass("hide");
        $('#ProductShow5').removeAttr("src");
        $('#ProductShow5').addClass("hide");
        $('#bg5').addClass("hide");
        $('#name2').attr("style", "display: none");
        $('#name3').attr("style", "display: none");
        $('#name4').attr("style", "display: none");
        disableRight();
        return;
    };
    $('#bg2').removeClass("hide");
    $('#ProductShow2').removeClass("hide");
    $('#ProductShow2').attr("src", urls[index+1]);
    NameShow2(index+1);
    //只有前两栏
    if (index+2 >= size) {
        $('#ProductShow3').removeAttr("src");
        $('#ProductShow3').addClass("hide");
        $('#bg3').addClass("hide");
        $('#ProductShow4').removeAttr("src");
        $('#ProductShow4').addClass("hide");
        $('#bg4').addClass("hide");
        $('#ProductShow5').removeAttr("src");
        $('#ProductShow5').addClass("hide");
        $('#bg5').addClass("hide");
        $('#name3').attr("style", "display: none");
        $('#name4').attr("style", "display: none");
        disableRight();
        return;
    };
    $('#bg3').removeClass("hide");
    $('#ProductShow3').removeClass("hide");
    $('#ProductShow3').attr("src", urls[index+2]);
    NameShow3(index+2);
    //只有前三栏
    if (index+3 >= size) {
        $('#ProductShow4').removeAttr("src");
        $('#ProductShow4').addClass("hide");
        $('#bg4').addClass("hide");
        $('#ProductShow5').removeAttr("src");
        $('#ProductShow5').addClass("hide");
        $('#bg5').addClass("hide");
        $('#name4').attr("style", "display: none");
        disableRight();
        return;
    };
    $('#bg4').removeClass("hide");
    $('#ProductShow4').removeClass("hide");
    $('#ProductShow4').attr("src", urls[index+3]);
    NameShow4(index+3);
    //只有前四栏
    if (index+4 >= size) {
        $('#ProductShow5').removeAttr("src");
        $('#ProductShow5').addClass("hide");
        $('#bg5').addClass("hide");
        disableRight();
        return;
    };
    $('#bg5').removeClass("hide");
    $('#ProductShow5').removeClass("hide");
    $('#ProductShow5').attr("src", urls[index+4]);
    enableRight();
}

//根据url中含有的特定字符串SpecStr筛选图片
//用于二级导航的筛选
function screen2(SpecStr){
    var temp=new Array();
    for (var i = 0; i < ImgStrAll.length; i++) {
        if(ImgStrAll[i].indexOf(SpecStr) != -1){
            temp.push(ImgStrAll[i]);
        }
    }
    ImgStr=temp;
    initShow(ImgStr);
}

//用于三级导航level3Name的筛选
//url1为路径，例如str111
//arr2为图片名称集合，例如img111
function screen3(level3Name, url1, arr2){
    //上次被选中的三级导航样式复原
    if ($(".square2").length) {
        $(".square2~a:first").removeAttr("style");
        $(".square2").removeClass("square2").addClass("square");
    }
    //本次被选中的三级导航highlight
    tmpStr1="#"+level3Name+">.square";
    tmpStr2="#"+level3Name+">a";
    $(tmpStr1).removeClass("square").addClass("square2");
    $(tmpStr2).attr("style", "color: #594345");
    //图片筛选
    var tmpImgStr=new Array();
    for (var i = 0; i < arr2.length; i++) {
        tmpImgStr.push(url1+arr2[i]+".png");
    }
    ImgStr=tmpImgStr;
    initShow(ImgStr);
}

//按照ImgStr中的url将图片依次显示出来
$(function(){
    var indexBg=1;
    //点击左边按钮
    $('#btnLeft').click(function(){
        if (CataOrDeta==0) {
            //当前在目录页        
            if ($('#btnLeft').attr("class")=="btnLeft2") {
                return;
            };
            //已保证当前index>0
            index-=2;
            indexBg-=2;
            if (index==-1) {
                    index=0;
                    indexBg++;
            }
            if (index==0) {
                    disableLeft();
            };
            change(ImgStr);
            enableRight();
            indexBg=adjustBg(indexBg);
            changeBg(indexBg);
        }
        else{
            //当前在详情页，已保证前面还有图片
            var DetailUrl=$("#DetailProductPicture").attr("src");
            DetailUrl=DetailUrl.replace(/product-detail/, "product-catalog");
            DetailUrl=DetailUrl.replace(/.jpg/, ".png");
            var prev = 0;
            for (; prev < ImgStr.length; prev++) {
                if(ImgStr[prev]==DetailUrl){
                    break;
                }
            }
            prev--;
            var NewDetailUrl=ImgStr[prev];
            NewDetailUrl=NewDetailUrl.replace(/product-catalog/, "product-detail");
            NewDetailUrl=NewDetailUrl.replace(/.png/, ".jpg");
            $("#DetailProductPicture").attr("src", NewDetailUrl);
            $("#DetailProductPreview").attr("src", NewDetailUrl);
            enableRight();
            if (prev==0) {disableLeft();}
        }
    });
    //点击右边按钮
    $('#btnRight').click(function(){
        if (CataOrDeta==0) {
            //当前在目录页        
            if ($('#btnRight').attr("class")=="btnRight2") {
                return;
            };
            //已保证当前index<size
            index+=2;
            indexBg+=2;
            if (index==size) {
                    index=size-1;
                    indexBg--;
            }
            if (index==size-1) {
                    disableRight();
            };
            change(ImgStr);
            enableLeft();
            indexBg=adjustBg(indexBg);
            changeBg(indexBg)
        }
        else{
            //当前在详情页，已保证后面还有图片
            var DetailUrl=$("#DetailProductPicture").attr("src");
            DetailUrl=DetailUrl.replace(/product-detail/, "product-catalog");
            DetailUrl=DetailUrl.replace(/.jpg/, ".png");
            var next = 0;
            for (; next < ImgStr.length; next++) {
                if(ImgStr[next]==DetailUrl){
                    break;
                }
            }
            next++;
            var NewDetailUrl=ImgStr[next];
            NewDetailUrl=NewDetailUrl.replace(/product-catalog/, "product-detail");
            NewDetailUrl=NewDetailUrl.replace(/.png/, ".jpg");
            $("#DetailProductPicture").attr("src", NewDetailUrl);
            $("#DetailProductPreview").attr("src", NewDetailUrl);
            enableLeft();
            if (next==ImgStr.length) {disableRight();}
       }
    });
    $('.level21').click(function(){
        //三级导航的展开隐藏
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
        if ($('#CurrentTheme').text()=="雕刻系列") {
            screen2($('#level-diaoke>.level21>a').text());
        }
        else if ($('#CurrentTheme').text()=="饰品系列") {
            screen2($('#level-shipin>.level21>a').text());
        }
        else if ($('#CurrentTheme').text()=="珠串系列") {
            screen2($('#level-zhuchuan>.level21>a').text());
        }
    })
    $('.level22').click(function(){
        //三级导航的展开隐藏
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
        if ($('#CurrentTheme').text()=="雕刻系列") {
            screen2($('#level-diaoke>.level22>a').text());
        }
        else if ($('#CurrentTheme').text()=="饰品系列") {
            screen2($('#level-shipin>.level22>a').text());
        }
        else if ($('#CurrentTheme').text()=="珠串系列") {
            screen2($('#level-zhuchuan>.level22>a').text());
        }
    })
    $('.level23').click(function(){
        //三级导航的展开隐藏
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
        if ($('#CurrentTheme').text()=="雕刻系列") {
            screen2($('#level-diaoke>.level23>a').text());
        }
        else if ($('#CurrentTheme').text()=="饰品系列") {
            screen2($('#level-shipin>.level23>a').text());
        }
        else if ($('#CurrentTheme').text()=="珠串系列") {
            screen2($('#level-zhuchuan>.level23>a').text());
        }
    })
    $('.level24').click(function(){
        //三级导航的展开隐藏
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
        screen2($('#level-shipin>.level24>a').text());
    })
    //点击“系列”则回到该系列全部图片的目录页
    $("#CurrentTheme").click(function(){
        //强行此时为目录模式而非详情模式
        $(".detail").attr("style", "display: none");
        $(".box").removeAttr("style");
        CataOrDeta=0;
        
        $('.level2chosen').removeClass("level2chosen").addClass("level2");
        if ($(".square2").length) {
            $(".square2~a:first").removeAttr("style");
            $(".square2").removeClass("square2").addClass("square");
        }
        ImgStr=ImgStrAll;
        initShow(ImgStr);
    })
    //三级导航的筛选
    $("#baijian1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("baijian1" ,str111, img111);
    })
    $("#baijian2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("baijian2" ,str112, img112);
    })
    $("#baijian3").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("baijian3" ,str113, img113);
    })
    $("#diaokejian1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("diaokejian1" ,str121, img121);
    })
    $("#diaokejian2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("diaokejian2" ,str122, img122);
    })
    $("#shoubajian1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("shoubajian1" ,str131, img131);
    })
    $("#bianzhi1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("bianzhi1" ,str211, img211);
    })
    $("#diaozhui1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("diaozhui1" ,str221, img221);
    })
    $("#diaozhui2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("diaozhui2" ,str222, img222);
    })
    $("#diaozhui3").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("diaozhui3" ,str223, img223);
    })
    $("#jiezhi1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("jiezhi1" ,str231, img231);
    })
    $("#shouzhuo1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("shouzhuo1" ,str241, img241);
    })
    $("#shouzhuo2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("shouzhuo2" ,str242, img242);
    })
    $("#fozhu1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("fozhu1" ,str311, img311);
    })
    $("#fozhu2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("fozhu2" ,str312, img312);
    })
    $("#shouchuan1").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("shouchuan1" ,str321, img321);
    })
    $("#shouchuan2").click(function(){
        if (CataOrDeta==1) {
            $(".detail").attr("style", "display: none");
            $(".box").removeAttr("style");
            CataOrDeta=0;
        }
        screen3("shouchuan2" ,str322, img322);
    })
    $("#ProductShow1").click(function(){
        enterDetail("#ProductShow1");        
    })
    $("#ProductShow2").click(function(){
        enterDetail("#ProductShow2");        
    })
    $("#ProductShow3").click(function(){
        enterDetail("#ProductShow3");        
    })
    $("#ProductShow4").click(function(){
        enterDetail("#ProductShow4");        
    })
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

//调整indexBg为有效值
function adjustBg(indexBg){
    if (indexBg>0 && indexBg<5) {
        return indexBg;
    };
    if(indexBg<1){
        indexBg+=4;
        return indexBg;
    }
    if(indexBg>4){
        indexBg-=4;
        return indexBg;
    }
}

//背景图片切换过程
function changeBg(indexBg){
    var temp2=adjustBg(indexBg+1);
    var temp3=adjustBg(indexBg+2);
    var temp4=adjustBg(indexBg+3);
    var temp5=adjustBg(indexBg+4);
    $('#bg1').attr("src", BgStr1+String(indexBg)+BgStr2);
    $('#bg2').attr("src", BgStr1+String(temp2)+BgStr2);
    $('#bg3').attr("src", BgStr1+String(temp3)+BgStr2);
    $('#bg4').attr("src", BgStr1+String(temp4)+BgStr2);
    $('#bg5').attr("src", BgStr1+String(temp5)+BgStr2);
}

function NameShow1(index){
    $('#name1').removeAttr("style");
    $('#name11').text(name1[index]);
    $('#name12').text(name2[index]);
}
function NameShow2(index){
    $('#name2').removeAttr("style");
    $('#name21').text(name1[index]);
    $('#name22').text(name2[index]);
}
function NameShow3(index){
    $('#name3').removeAttr("style");
    $('#name31').text(name1[index]);
    $('#name32').text(name2[index]);
}
function NameShow4(index){
    $('#name4').removeAttr("style");
    $('#name41').text(name1[index]);
    $('#name42').text(name2[index]);
}

//点击图片进入详情页
function enterDetail(CurrentProduct){
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
    var DetailUrl=$(CurrentProduct).attr("src");
    //判断当前图片是否为当前目录的第一/最后一张，从而设置左右箭头是否可用
    if (ImgStr.length==1) {
        disableLeft();
        disableRight();
    }
    else{
        if (DetailUrl==ImgStr[0]) {
            disableLeft();
            enableRight();
        }
        else if (DetailUrl==ImgStr[ImgStr.length-1]) {
            enableLeft();
            disableRight();
        }
        else{
            enableLeft();
            enableRight();
        }
    }

    var KeyName=DetailUrl.substring(DetailUrl.indexOf("【"), DetailUrl.indexOf("】")+1);
    DetailUrl=DetailUrl.replace(/product-catalog/, "product-detail");
    DetailUrl=DetailUrl.replace(/.png/, ".jpg");
    $('#DetailProductPicture').attr("src", DetailUrl);
    $('#DetailProductPreview').attr("src", DetailUrl);

    //详情图片的名称
    var NewName;
    var NewName1;
    var NewName2;
    for (var i = 0; i < ImgDAll.length; i++) {
        if(ImgDAll[i].indexOf(KeyName)!=-1){
            NewName=ImgDAll[i];
            NewName1=ImgDAll[i].substring(ImgDAll[i].indexOf("【")+1, ImgDAll[i].indexOf("】"));
            NewName2=ImgDAll[i].substring(ImgDAll[i].indexOf("】")+1, ImgDAll[i].length);
        }
    };
    $('#DetailName1>a').text(NewName1);
    $('#DetailName2>a').text(NewName2);
}