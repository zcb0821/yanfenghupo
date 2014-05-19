//对数据库中产品进行条件搜索
$("#SubmitSearch").click(function(){
    var checkSeries=$("#select_series").val();
    var checkFunction=$("#select_function").val();
    var checkOrigin=$("#select_origin").val();
    var checkMaterial=$("#select_material").val();
    var checkKeyName=$("#KeyName").val();
    var AjaxData = "";
    if (checkSeries != "")
        AjaxData += "series="+checkSeries;
    if (checkFunction != "") {
        if (AjaxData != "")
            AjaxData += "&";
        AjaxData += "function="+checkFunction;
    }
    if (checkOrigin != "") {
        if (AjaxData != "")
            AjaxData += "&";
        AjaxData += "origin="+checkOrigin;
    }
    if (checkMaterial != "") {
        if (AjaxData != "")
            AjaxData += "&";
        AjaxData += "material=" + checkMaterial;
    }
    if (checkKeyName != "") {
        if (AjaxData != "")
            AjaxData += "&";
        AjaxData += "KeyName=" + checkKeyName;
    }
    $.ajax({
        type: "POST",
        url: "/SearchResult/",
        data: AjaxData,
        success: function(result) {
            $("#SearchResult").html(result);
            if ($(".isResult").length > 0) {
                $("#SearchResult").removeClass("hide");
                $("#ShowResult").removeClass("hide");
            }
            else {
                $("#ShowResult").text("没有找到相关产品");
                $("#ShowResult").removeClass("hide");
                $("#SearchResult").html("");
            }
        }
    });
})