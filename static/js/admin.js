$("#PRODUCT").click(function(){
    $("#PRODUCTROW").removeAttr("style");
    $("#EVENTROW").attr("style", "display: none");
})
$("#EVENT").click(function(){
    $("#EVENTROW").removeAttr("style");
    $("#PRODUCTROW").attr("style", "display: none");
})

//删除该产品
var toDel;
$("#ProductList").on('click', '.DelTd', function(){
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

//新增产品
$("#AddBtn").click(function(){
    $("#AddDisplayName").attr("placeholder", "请输入产品名称");
    $("#AddDisplayName").val("");
    $("#AddDetailName").attr("placeholder", "请输入产品描述");
    $("#AddDetailName").val("");
    $("#select_material2").val("");
    $("#select_series2").val("");
    $("#select_function2").val("");
    $("#select_origin2").val("");
})
$("#SaveAdd").click(function ProductSaveAdd(){
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
//上传产品图片
$("#GotoAddPicture").click(function(){
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
                //将该id发到UploadAddPro页面，进行特定产品的图片上传
                window.location.href="/UploadAddPro/product/"+result+"/"
            }
        }
    });
})

//修改该产品
var toSet;
var OrigName, OrigDetail, OrigMaterial, OrigSeries, OrigFunction, OrigOrigin;
$("#ProductList").on('click', '.SetTd', function(){
        toSet = $(this).parent().children();
        OrigName=toSet.eq(0).text();
        OrigDetail=toSet.eq(1).text();
        OrigMaterial=toSet.eq(2).text();
        OrigSeries=toSet.eq(3).text();
        OrigFunction=toSet.eq(4).text();
        OrigOrigin=toSet.eq(5).text();
        $("#EditDisplayName").attr("placeholder", OrigName);
        $("#EditDisplayName").val("");
        $("#EditDetailName").attr("placeholder", OrigDetail);
        $("#EditDetailName").val("");
        $("#select_material").val(OrigMaterial);
        $("#select_series").val(OrigSeries);
        $("#select_function").val(OrigFunction);
        $("#select_origin").val(OrigOrigin);
        $('#myModal2').modal('show');
    })
//修改产品基本信息
$("#SaveChanges").click(function(){
    var newName = $("#EditDisplayName").val();
    if(newName == "") newName = OrigName;
    var newDetail = $("#EditDetailName").val();
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
//只修改产品图片
$("#GotoEditPicture").click(function(){
//查询数据库，获取当前所编辑的图片的id
    $.ajax({
        type: "POST",
        url: "/GetProductId/",
        data: "display_name="+OrigName,
        success: function(result) {
            //将该id发到UploadEditPro页面，进行特定产品的图片上传
            window.location.href="/UploadEditPro/product/"+result+"/"
        }
    });
})

//删除该活动
var toDel2;
$("#EventList").on('click', '.DelTd2', function(){
    toDel2 = $(this).parent();
})
$("#ConfirmDelEve").click(function(){
    var OrigNameEve = toDel2.children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/DelEvent/",
        data: "name="+OrigNameEve,
        success: function(result) {
            toDel2.remove();
        }
    });
})

//新增活动
$("#AddBtn2").click(function(){
    //编辑活动名称和简介
    $("#AddName").attr("placeholder", "请输入活动名称");
    $("#AddName").val("");
    $("#AddIntro").attr("placeholder", "请输入活动简介");
    $("#AddIntro").val("");
})
$("#SaveAddEve").click(function(){
    var newName = $("#AddName").val()
    var newIntro = $("#AddIntro").val()
    var AjaxData="&name="+newName+
        "&introduction="+newIntro;
    $.ajax({
        type: "POST",
        url: "/AddEvent/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("该活动信息已存在！新增失败！");
            }
            else {
                NewEventInfo = "<tr class=\"odd gradeX\"><td>"+
                    newName+"</td><td>"+
                    newIntro+"</td><td><a class=\"GoToEditDetail\">点击编辑活动详情</a></td><td class=\"SetTd2\"></td><td data-toggle=\"modal\" data-target=\"#myModalEve\" class=\"DelTd2\"></td></tr>"
                $("#EventList").append(NewEventInfo);
            }
        }
    });
})
//上传活动海报
$("#GotoAddPicEve").click(function(){
    var newName = $("#AddName").val()
    var newIntro = $("#AddIntro").val()
    var AjaxData="&name="+newName+
        "&introduction="+newIntro;
    $.ajax({
        type: "POST",
        url: "/AddEvent/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("该活动信息已存在！新增失败！");
            }
            else {
                NewEventInfo = "<tr class=\"odd gradeX\"><td>"+
                    newName+"</td><td>"+
                    newIntro+"</td><td><a class=\"GoToEditDetail\">点击编辑活动详情</a></td><td class=\"SetTd2\"></td><td data-toggle=\"modal\" data-target=\"#myModalEve\" class=\"DelTd2\"></td></tr>"
                $("#EventList").append(NewEventInfo);
            //将该id发到UploadEditEve页面，进行特定活动的海报上传
            window.location.href="/UploadEditEve/event/"+result+"/"
            }
        }
    });
})

//点击编辑活动详情的函数
$("#EventList").on('click', '.GoToEditDetail', function(){
    //查询数据库，获取当前所编辑的活动的id
    var CurrentEventName = $(this).parent().parent().children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+CurrentEventName,
        success: function(result) {
            //将该id发到cktest页面，进行特定活动的详情编辑
            window.location.href="/cktest/event/"+result+"/"
        }
    });
});

var toSet2;
var OrigNameEve, OrigIntroEve;
//修改该活动
$("#EventList").on('click', '.SetTd2', function(){
    toSet2 = $(this).parent().children();
    OrigNameEve=toSet2.eq(0).text();
    OrigIntroEve=toSet2.eq(1).text();
    $("#EditName").attr("placeholder", OrigNameEve);
    $("#EditName").val("");
    $("#EditIntro").attr("placeholder", OrigIntroEve);
    $("#EditIntro").val("");
    $('#myModal2Eve').modal('show');
})
//修改活动名称和详情
$("#SaveChangesEve").click(function(){
    var newName = $("#EditName").val();
    if(newName == "") newName = OrigNameEve;
    var newIntro = $("#EditIntro").val();
    if(newIntro == "") newIntro = OrigIntroEve;
    $.ajax({
        type: "POST",
        url: "/SetEvent/",
        data: "origin_name="+OrigNameEve+"&name="+newName+"&introduction="+newIntro,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("修改后的该活动信息已存在！修改失败！");
            }
            else {
                toSet2.eq(0).text(newName);
                toSet2.eq(1).text(newIntro);
            }
        }
    });
})
//只编辑活动详情
$("#GotoEditDetail").click(function(){
    //查询数据库，获取当前所编辑的活动的id
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+OrigNameEve,
        success: function(result) {
            //将该id发到cktest页面，进行特定活动的编辑
            window.location.href="/cktest/event/"+result+"/"
        }
    });
})
//只修改活动海报
$("#GotoEditPicEve").click(function(){
    //查询数据库，获取当前所编辑的图片的id
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+OrigNameEve,
        success: function(result) {
            //将该id发到UploadEditEve页面，进行特定活动的海报上传
            window.location.href="/UploadEditEve/event/"+result+"/"
        }
    });
})