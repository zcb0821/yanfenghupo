window.onload = function(){
    var textMid = "px\">"+
        "<div style=\"height:8px\"></div>"+
        "<a class=\"textbody\">";
    var textPost = "</a></div></div>"

    var CItextPre = "<div class=\"aboutCI\">"+
        "<div class=\"AboutWrapper\" style=\"left:";
    var CItextAppend;
    var CItextHTML = document.getElementById("CItextHTML").value;
    var CItextLen = CItextHTML.length;
    var CItextIndex = 0;
    while (CItextLen > 0) {
        var max = (CItextIndex*497+497 <= CItextHTML.length)?(CItextIndex*497+497):(CItextHTML.length)
        CItextAppend = CItextPre + (420*CItextIndex).toString() + textMid + CItextHTML.substring(CItextIndex*497, max) + textPost;
        $(".box").append(CItextAppend);
        CItextLen -=497;
        CItextIndex += 1;
    }
    
    var BItextPre = "<div class=\"aboutBI hide\">"+
        "<div class=\"AboutWrapper\" style=\"left:";
    var BItextAppend;
    var BItextHTML = document.getElementById("BItextHTML").value;
    var BItextLen = BItextHTML.length;
    var BItextIndex = 0;
    while (BItextLen > 0) {
        var max = (BItextIndex*497+497 <= BItextHTML.length)?(BItextIndex*497+497):(BItextHTML.length)
        BItextAppend = BItextPre + (420*BItextIndex).toString() + textMid + BItextHTML.substring(BItextIndex*497, max) + textPost;
        $(".box").append(BItextAppend);
        BItextLen -=497;
        BItextIndex += 1;
    }
    
    var BSPtextPre = "<div class=\"aboutBSP hide\">"+
        "<div class=\"AboutWrapper\" style=\"left:";
    var BSPtextAppend;
    var BSPtextHTML = document.getElementById("BSPtextHTML").value;
    var BSPtextLen = BSPtextHTML.length;
    var BSPtextIndex = 0;
    while (BSPtextLen > 0) {
        var max = (BSPtextIndex*360+360 <= BSPtextHTML.length)?(BSPtextIndex*360+360):(BSPtextHTML.length)
        BSPtextAppend = BSPtextPre + (420*BSPtextIndex).toString() + textMid + BSPtextHTML.substring(BSPtextIndex*360, max) + textPost;
        $(".box").append(BSPtextAppend);
        BSPtextLen -=360;
        BSPtextIndex += 1;
    }
    
    var BSEtextPre = "<div class=\"aboutBSE hide\">"+
        "<div class=\"AboutWrapper\" style=\"left:";
    var BSEtextAppend;
    var BSEtextHTML = document.getElementById("BSEtextHTML").value;
    var BSEtextLen = BSEtextHTML.length;
    var BSEtextIndex = 0;
    while (BSEtextLen > 0) {
        var max = (BSEtextIndex*400+400 <= BSEtextHTML.length)?(BSEtextIndex*400+400):(BSEtextHTML.length)
        BSEtextAppend = BSEtextPre + (420*BSEtextIndex).toString() + textMid + BSEtextHTML.substring(BSEtextIndex*400, max) + textPost;
        $(".box").append(BSEtextAppend);
        BSEtextLen -=400;
        BSEtextIndex += 1;
    }
}

$(function(){
	$("#company-intro").click(function(){
		$("#company-intro").removeClass("level2").addClass("level2chosen");
		$("#brand-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-spe").removeClass("level2chosen").addClass("level2");
		$("#brand-ser").removeClass("level2chosen").addClass("level2");
        $(".aboutCI").removeClass("hide");
		$(".aboutBI").addClass("hide");
		$(".aboutBSP").addClass("hide");
		$(".aboutBSE").addClass("hide");
	})
	$("#brand-intro").click(function(){
		$("#company-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-intro").removeClass("level2").addClass("level2chosen");
		$("#brand-spe").removeClass("level2chosen").addClass("level2");
		$("#brand-ser").removeClass("level2chosen").addClass("level2");
        $(".aboutCI").addClass("hide");
		$(".aboutBI").removeClass("hide");
		$(".aboutBSP").addClass("hide");
		$(".aboutBSE").addClass("hide");
	})
	$("#brand-spe").click(function(){
		$("#company-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-spe").removeClass("level2").addClass("level2chosen");
		$("#brand-ser").removeClass("level2chosen").addClass("level2");
        $(".aboutCI").addClass("hide");
		$(".aboutBI").addClass("hide");
		$(".aboutBSP").removeClass("hide");
		$(".aboutBSE").addClass("hide");
	})
	$("#brand-ser").click(function(){
		$("#company-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-intro").removeClass("level2chosen").addClass("level2");
		$("#brand-spe").removeClass("level2chosen").addClass("level2");
		$("#brand-ser").removeClass("level2").addClass("level2chosen");
        $(".aboutCI").addClass("hide");
		$(".aboutBI").addClass("hide");
		$(".aboutBSP").addClass("hide");
		$(".aboutBSE").removeClass("hide");
	})
});