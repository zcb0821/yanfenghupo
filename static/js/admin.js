$("#PRODUCT").click(function(){
    $("#PRODUCTROW").removeAttr("style");
    $("#EVENTROW").attr("style", "display: none");
    $("#HALLROW").attr("style", "display: none");
})
$("#EVENT").click(function(){
    $("#EVENTROW").removeAttr("style");
    $("#PRODUCTROW").attr("style", "display: none");
    $("#HALLROW").attr("style", "display: none");
})
$("#HALL").click(function(){
    $("#HALLROW").removeAttr("style");
    $("#PRODUCTROW").attr("style", "display: none");
    $("#EVENTROW").attr("style", "display: none");
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

//删除该展会
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

//新增展会
$("#AddBtn2").click(function(){
    //编辑展会名称和简介
    $("#AddName").attr("placeholder", "请输入展会名称");
    $("#AddName").val("");
    $("#AddIntro").attr("placeholder", "请输入展会简介");
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
                alert("该展会信息已存在！新增失败！");
            }
            else {
                NewEventInfo = "<tr class=\"odd gradeX\"><td>"+
                    newName+"</td><td>"+
                    newIntro+"</td><td><a class=\"GoToEditDetail\">点击编辑展会详情</a></td><td class=\"SetTd2\"></td><td data-toggle=\"modal\" data-target=\"#myModalEve\" class=\"DelTd2\"></td></tr>"
                $("#EventList").append(NewEventInfo);
            }
        }
    });
})
//上传展会海报
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
                alert("该展会信息已存在！新增失败！");
            }
            else {
                NewEventInfo = "<tr class=\"odd gradeX\"><td>"+
                    newName+"</td><td>"+
                    newIntro+"</td><td><a class=\"GoToEditDetail\">点击编辑展会详情</a></td><td class=\"SetTd2\"></td><td data-toggle=\"modal\" data-target=\"#myModalEve\" class=\"DelTd2\"></td></tr>"
                $("#EventList").append(NewEventInfo);
            //将该id发到UploadEditEve页面，进行特定展会的海报上传
            window.location.href="/UploadAddEve/event/"+result+"/"
            }
        }
    });
})

//点击编辑展会详情的函数
$("#EventList").on('click', '.GoToEditDetail', function(){
    //查询数据库，获取当前所编辑的展会的id
    var CurrentEventName = $(this).parent().parent().children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+CurrentEventName,
        success: function(result) {
            //将该id发到cktest页面，进行特定展会的详情编辑
            window.location.href="/cktest/event/"+result+"/"
        }
    });
});

var toSet2;
var OrigNameEve, OrigIntroEve;
//修改该展会
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
//修改展会名称和详情
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
                alert("修改后的该展会信息已存在！修改失败！");
            }
            else {
                toSet2.eq(0).text(newName);
                toSet2.eq(1).text(newIntro);
            }
        }
    });
})
//只编辑展会详情
$("#GotoEditDetail").click(function(){
    //查询数据库，获取当前所编辑的展会的id
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+OrigNameEve,
        success: function(result) {
            //将该id发到cktest页面，进行特定展会的编辑
            window.location.href="/cktest/event/"+result+"/"
        }
    });
})
//只修改展会海报
$("#GotoEditPicEve").click(function(){
    //查询数据库，获取当前所编辑的图片的id
    $.ajax({
        type: "POST",
        url: "/GetEventId/",
        data: "name="+OrigNameEve,
        success: function(result) {
            //将该id发到UploadEditEve页面，进行特定展会的海报上传
            window.location.href="/UploadEditEve/event/"+result+"/"
        }
    });
})

//删除该展厅活动
var toDel3;
$("#HallList").on('click', '.DelTd3', function(){
    toDel3 = $(this).parent();
})
$("#ConfirmDelHall").click(function(){
    var OrigTitle = toDel3.children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/DelHall/",
        data: "title="+OrigTitle,
        success: function(result) {
            toDel3.remove();
        }
    });
})

//新增展厅活动
$("#AddBtn3").click(function(){
    //编辑展厅活动基本信息
    $("#AddTitle").attr("placeholder", "请输入活动标题");
    $("#AddTitle").val("");
    $("#AddDate").attr("placeholder", "0000-00-00");
    $("#AddDate").val("");
    $("#AddIntroHall").attr("placeholder", "请输入活动简介");
    $("#AddIntroHall").val("");
    $("#AddAddress").attr("placeholder", "请输入活动地址");
    $("#AddAddress").val("");
    $("#AddTelephone").attr("placeholder", "请输入联系电话");
    $("#AddTelephone").val("");
})
$("#SaveAddHall").click(function(){
    var newTitle = $("#AddTitle").val()
    var newDate = $("#AddDate").val()
    var newIntroHall = $("#AddIntroHall").val()
    var newAddress = $("#AddAddress").val()
    var newTelephone = $("#AddTelephone").val()
    var AjaxData="&title="+newTitle+
        "&date="+newDate+
        "&introduction="+newIntroHall+
        "&address="+newAddress+
        "&telephone="+newTelephone;
    $.ajax({
        type: "POST",
        url: "/AddHall/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("该展厅活动信息已存在！新增失败！");
            }
            else {
                NewHallInfo = "<tr class=\"odd gradeX\"><td>"+
                    newTitle+"</td><td>"+
                    newDate+"</td><td>"+
                    newIntroHall+"</td><td>"+
                    newAddress+"</td><td>"+
                    newTelephone+"</td><td><a class=\"GoToEditDetailHall\">点击编辑活动详情</a></td><td class=\"SetTd3\"></td><td data-toggle=\"modal\" data-target=\"#myModal3Hall\" class=\"DelTd3\"></td></tr>"
                $("#HallList").append(NewHallInfo);
            }
        }
    });
})
//上传展厅活动海报
$("#GotoAddPicHall").click(function(){
    var newTitle = $("#AddTitle").val()
    var newDate = $("#AddDate").val()
    var newIntroHall = $("#AddIntroHall").val()
    var newAddress = $("#AddAddress").val()
    var newTelephone = $("#AddTelephone").val()
    var AjaxData="&title="+newTitle+
        "&date="+newDate+
        "&introduction="+newIntroHall+
        "&address="+newAddress+
        "&telephone="+newTelephone;
    $.ajax({
        type: "POST",
        url: "/AddHall/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("该展厅活动信息已存在！新增失败！");
            }
            else {
                NewHallInfo = "<tr class=\"odd gradeX\"><td>"+
                    newTitle+"</td><td>"+
                    newDate+"</td><td>"+
                    newIntroHall+"</td><td>"+
                    newAddress+"</td><td>"+
                    newTelephone+"</td><td><a class=\"GoToEditDetailHall\">点击编辑活动详情</a></td><td class=\"SetTd3\"></td><td data-toggle=\"modal\" data-target=\"#myModal3Hall\" class=\"DelTd3\"></td></tr>"
                $("#HallList").append(NewHallInfo);
                //将该id发到UploadEditHall页面，进行特定展厅活动的海报上传
                window.location.href="/UploadAddHall/hall/"+result+"/"
            }
        }
    });
})

//点击编辑展厅活动详情的函数
$("#HallList").on('click', '.GoToEditDetailHall', function(){
    //查询数据库，获取当前所编辑的展会的id
    var CurrentHallTitle = $(this).parent().parent().children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/GetHallId/",
        data: "title="+CurrentHallTitle,
        success: function(result) {
            //将该id发到cktest2页面，进行特定展会的详情编辑
            window.location.href="/cktest2/hall/"+result+"/"
        }
    });
});

var toSet3;
var OrigTitle, OrigDate, OrigIntroHall, OrigAddress, OrigTelephone;
//修改该展厅活动
$("#HallList").on('click', '.SetTd3', function(){
    toSet3 = $(this).parent().children();
    OrigTitle=toSet3.eq(0).text();
    OrigDate=toSet3.eq(1).text();
    OrigIntroHall=toSet3.eq(2).text();
    OrigAddress=toSet3.eq(3).text();
    OrigTelephone=toSet3.eq(4).text();
    $("#EditTitle").attr("placeholder", OrigTitle);
    $("#EditTitle").val("");
    $("#EditDate").attr("placeholder", OrigDate);
    $("#EditDate").val("");
    $("#EditIntroHall").attr("placeholder", OrigIntroHall);
    $("#EditIntroHall").val("");
    $("#EditAddress").attr("placeholder", OrigAddress);
    $("#EditAddress").val("");
    $("#EditTelephone").attr("placeholder", OrigTelephone);
    $("#EditTelephone").val("");
    $('#myModal2Hall').modal('show');
})
//修改展厅活动基本信息
$("#SaveChangesHall").click(function(){
    var newTitle = $("#EditTitle").val()
    if (newTitle == "") newTitle = OrigTitle;
    var newDate = $("#EditDate").val()
    if (newDate == "") newDate = OrigDate;
    var newIntroHall = $("#EditIntroHall").val()
    if (newIntroHall == "") newIntroHall = OrigIntroHall;
    var newAddress = $("#EditAddress").val()
    if (newAddress == "") newAddress = OrigAddress;
    var newTelephone = $("#EditTelephone").val()
    if (newTelephone == "") newTelephone = OrigTelephone;
    var AjaxData="&orig_title="+OrigTitle+
        "&orig_date="+OrigDate+
        "&orig_introduction="+OrigIntroHall+
        "&orig_address="+OrigAddress+
        "&orig_telephone="+OrigTelephone+
        "&title="+newTitle+
        "&date="+newDate+
        "&introduction="+newIntroHall+
        "&address="+newAddress+
        "&telephone="+newTelephone;
    $.ajax({
        type: "POST",
        url: "/SetHall/",
        data: AjaxData,
        success: function(result) {
            if(result=="AlreadyExist") {
                alert("修改后的该展厅活动信息已存在！修改失败！");
            }
            else {
                toSet3.eq(0).text(newTitle);
                toSet3.eq(1).text(newDate);
                toSet3.eq(2).text(newIntroHall);
                toSet3.eq(3).text(newAddress);
                toSet3.eq(4).text(newTelephone);
            }
        }
    });
})
//只编辑展厅活动详情
$("#GotoEditDetailHall").click(function(){
    //查询数据库，获取当前所编辑的展厅活动的id
    $.ajax({
        type: "POST",
        url: "/GetHallId/",
        data: "title="+OrigTitle,
        success: function(result) {
            //将该id发到cktest页面，进行特定展厅活动的编辑
            window.location.href="/cktest2/hall/"+result+"/"
        }
    });
})
//只修改展厅活动海报
$("#GotoEditPicHall").click(function(){
    //查询数据库，获取当前所编辑的图片的id
    $.ajax({
        type: "POST",
        url: "/GetHallId/",
        data: "title="+OrigTitle,
        success: function(result) {
            //将该id发到UploadEditHall页面，进行特定展厅活动的海报上传
            window.location.href="/UploadEditHall/hall/"+result+"/"
        }
    });
})

//选中系列之后，才展开功能的选择
$("#myModal3").on('change', "#select_series2", function(){
    var series = $("#select_series2").val();
    if (series == "雕刻"){
        var diaoke = "<option value=\"摆件\">摆件</option>"+
                    "<option value=\"雕刻件\">雕刻件</option>"+
                    "<option value=\"手把件\">手把件</option>";
        $("#select_function2").append(diaoke);
    }
    else if(series == "饰品"){
        var shipin = "<option value=\"编织特色\">编织特色</option>"+
                    "<option value=\"吊坠\">吊坠</option>"+
                    "<option value=\"戒指和耳钉\">戒指和耳钉</option>"+
                    "<option value=\"手镯\">手镯</option>";
        $("#select_function2").append(shipin);
    }
    else if (series == "珠串"){
        var zhuchuan = "<option value=\"佛珠\">佛珠</option>"+
                    "<option value=\"手串\">手串</option>";
        $("#select_function2").append(zhuchuan);
    }
    $("#select_function2").val("");
})

//选中功能之后，才展开产地的选择
$("#myModal3").on('change', "#select_function2", function(){
    var fun = $("#select_function2").val();
    var appendStr;
    if (fun == "摆件"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"缅甸\">缅甸</option>"+
                    "<option value=\"墨西哥\">墨西哥</option>";
    }
    else if(fun == "雕刻件"){
        appendStr = "<option value=\"多米尼加\">多米尼加</option>"+
                    "<option value=\"缅甸\">缅甸</option>";
    }
    else if(fun == "手把件"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>";
    }
    else if(fun == "编织特色"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>";
    }
    else if (fun == "吊坠"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>"+
                    "<option value=\"缅甸\">缅甸</option>";
    }
    else if (fun == "戒指和耳钉"){
        appendStr = "<option value=\"多米尼加\">多米尼加</option>";
    }
    else if (fun == "佛珠"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>";
    }
    else if (fun == "手镯"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>";
    }
    $("#select_origin2").append(appendStr);
    $("#select_origin2").val("");
})

//选中系列之后，才展开功能的选择
$("#myModal2").on('change', "#select_series", function(){
    var series = $("#select_series").val();
    if (series == "雕刻"){
        var diaoke = "<option value=\"摆件\">摆件</option>"+
                    "<option value=\"雕刻件\">雕刻件</option>"+
                    "<option value=\"手把件\">手把件</option>";
        $("#select_function").append(diaoke);
    }
    else if(series == "饰品"){
        var shipin = "<option value=\"编织特色\">编织特色</option>"+
                    "<option value=\"吊坠\">吊坠</option>"+
                    "<option value=\"戒指和耳钉\">戒指和耳钉</option>"+
                    "<option value=\"手镯\">手镯</option>";
        $("#select_function").append(shipin);
    }
    else if (series == "珠串"){
        var zhuchuan = "<option value=\"佛珠\">佛珠</option>"+
                    "<option value=\"手串\">手串</option>";
        $("#select_function").append(zhuchuan);
    }
    $("#select_function").val("");
})

//选中功能之后，才展开产地的选择
$("#myModal2").on('change', "#select_function", function(){
    var fun = $("#select_function").val();
    var appendStr;
    if (fun == "摆件"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"缅甸\">缅甸</option>"+
                    "<option value=\"墨西哥\">墨西哥</option>";
    }
    else if(fun == "雕刻件"){
        appendStr = "<option value=\"多米尼加\">多米尼加</option>"+
                    "<option value=\"缅甸\">缅甸</option>";
    }
    else if(fun == "手把件"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>";
    }
    else if(fun == "编织特色"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>";
    }
    else if (fun == "吊坠"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>"+
                    "<option value=\"缅甸\">缅甸</option>";
    }
    else if (fun == "戒指和耳钉"){
        appendStr = "<option value=\"多米尼加\">多米尼加</option>";
    }
    else if (fun == "佛珠"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>";
    }
    else if (fun == "手镯"){
        appendStr = "<option value=\"波罗的海\">波罗的海</option>"+
                    "<option value=\"多米尼加\">多米尼加</option>";
    }
    $("#select_origin").append(appendStr);
    $("#select_origin").val("");
})