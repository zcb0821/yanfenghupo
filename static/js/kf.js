var online = new Array();
var tOut = -1;
var drag = false;
var g_safeNode = null;
lastScrollY = 0;
var ws;
var type;

window.setTimeout("kf_moveWithScroll()", 1);

function kf_moveWithScroll() {
	if (typeof window.pageYOffset != 'undefined') {
		nowY = window.pageYOffset;
	} else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
		nowY = document.documentElement.scrollTop;
	} else if (typeof document.body != 'undefined') {
		nowY = document.body.scrollTop;
	}

	percent = .1 * (nowY - lastScrollY);
	if (percent > 0) {
		percent = Math.ceil(percent);
	} else {
		percent = Math.floor(percent);
	}

	document.getElementById("rightDiv").style.top = parseInt(document.getElementById("rightDiv").style.top) + percent + "px";
	if (document.getElementById("kfpopupDiv")) {
		document.getElementById("kfpopupDiv").style.top = parseInt(document.getElementById("kfpopupDiv").style.top) + percent + "px";
	}
	lastScrollY = lastScrollY + percent;
	tOut = window.setTimeout("kf_moveWithScroll()", 1);
}