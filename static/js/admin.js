var toSet;
var OrigName, OrigDetail, OrigMaterial, OrigSeries, OrigFunction, OrigOrigin;
//修改该产品
$(".SetTd").click(function(){
    toSet = $(this).parent().children();
    OrigName=toSet.eq(0).text();
    OrigDetail=toSet.eq(1).text();
    OrigMaterial=toSet.eq(2).text();
    OrigSeries=toSet.eq(3).text();
    OrigFunction=toSet.eq(4).text();
    OrigOrigin=toSet.eq(5).text();
    $("#EditDisplayName").attr("placeholder", OrigName);
    $("#EditDetailName").attr("placeholder", OrigDetail);
    $("#select_material").val(OrigMaterial);
    $("#select_series").val(OrigSeries);
    $("#select_function").val(OrigFunction);
    $("#select_origin").val(OrigOrigin);
    $('#myModal2').modal('show');
})
$("#SaveChanges").click(function(){
    var newName = $("#EditDisplayName").attr("placeholder")
    if(newName == "") newName = OrigName;
    var newDetail = $("#EditDetailName").attr("placeholder")
    if(newDetail == "") newDetail = OrigDetail;
    var newMaterial = $("#select_material").val()
    if(newMaterial == null) newMaterial = OrigMaterial;
    var newSeries = $("#select_series").val()
    if(newSeries == null) newSeries = OrigSeries;
    var newFunction = $("#select_function").val()
    if(newFunction == null) newFunction = OrigFunction;
    var newOrigin = $("#select_origin").val();
    if(newOrigin == null) newOrigin = OrigOrigin;
    var AjaxData="origin_name="+OrigName+
        "&origin_detail="+OrigDetail+
        "&origin_material="+OrigMaterial+
        "&origin_series="+OrigSeries+
        "&origin_function="+OrigFunction+
        "&origin_origin="+OrigOrigin+
        "&display_name="+newName+
        "&detail_name="+newDetail+
        "&material="+newMaterial+
        "&series="+newSeries+
        "&function="+newFunction+
        "&origin="+newOrigin;
    $.ajax({
        type: "POST",
        url: "/SetProduct/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("修改后的该产品信息已存在！修改失败！");
            }
            else {
                toSet.eq(0).text(newName);
                toSet.eq(1).text(newDetail);
                toSet.eq(2).text(newMaterial);
                toSet.eq(3).text(newSeries);
                toSet.eq(4).text(newFunction);
                toSet.eq(5).text(newOrigin);
            }
        }
    });
})

var toDel;
//删除该产品
$(".DelTd").click(function(){
    toDel = $(this).parent();
})
$("#ConfirmDel").click(function(){
    OrigName = toDel.children().eq(0).text();
    OrigDetail = toDel.children().eq(1).text();
    OrigMaterial = toDel.children().eq(2).text();
    OrigSeries = toDel.children().eq(3).text();
    OrigFunction = toDel.children().eq(4).text();
    OrigOrigin = toDel.children().eq(5).text();
    var AjaxData="display_name="+OrigName+
        "&detail_name="+OrigDetail+
        "&material="+OrigMaterial+
        "&series="+OrigSeries+
        "&function="+OrigFunction+
        "&origin="+OrigOrigin;
    $.ajax({
        type: "POST",
        url: "/DelProduct/",
        data: AjaxData,
        success: function(result) {
            toDel.remove();
        }
    });
})

$("#AddBtn").click(function(){
    $("#AddDisplayName").attr("placeholder", "输入产品名称");
    $("#AddDisplayName").val("");
    $("#AddDetailName").attr("placeholder", "输入产品描述");
    $("#AddDetailName").val("");
    $("#select_material2").val("");
    $("#select_series2").val("");
    $("#select_function2").val("");
    $("#select_origin2").val("");
})
//新增产品
$("#SaveAdd").click(function(){
    var newName = $("#AddDisplayName").val()
    var newDetail = $("#AddDetailName").val()
    var newMaterial = $("#select_material2").val()
    var newSeries = $("#select_series2").val()
    var newFunction = $("#select_function2").val()
    var newOrigin = $("#select_origin2").val();
    var AjaxData="&display_name="+newName+
        "&detail_name="+newDetail+
        "&material="+newMaterial+
        "&series="+newSeries+
        "&function="+newFunction+
        "&origin="+newOrigin;
    $.ajax({
        type: "POST",
        url: "/AddProduct/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("该产品信息已存在！新增失败！");
            }
            else {
                NewProductInfo = "<tr class=\"odd gradeX\"><td>"+
                    newName+"</td><td>"+
                    newDetail+"</td><td>"+
                    newMaterial+"</td><td>"+
                    newSeries+"</td><td>"+
                    newFunction+"</td><td>"+
                    newOrigin+"</td><td class=\"SetTd\"></td><td data-toggle=\"modal\" data-target=\"#myModal\" class=\"DelTd\"></td></tr>"
                $("#ProductList").append(NewProductInfo);
            }
        }
    });
})