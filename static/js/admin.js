//删除该产品
$(".DelTd").click(function(){
    var toDel = $(this).parent();
    var thisName = $(this).parent().children().eq(0).text();
    $.ajax({
        type: "POST",
        url: "/DelProduct/",
        data: "display_name="+thisName,
        success: function(result) {
            toDel.remove();
        }
    });
})

//修改该产品
$(".SetTd").click(function(){
    var thisProduct = $(this).parent().children();
    $("#EditDisplayName").setAttribute("placeholder", thisProduct.eq(0).text());
    $("#EditDetailName").setAttribute("placeholder", thisProduct.eq(1).text());
    $("#EditMaterial").setAttribute("placeholder", thisProduct.eq(2).text());
    $("#EditSeries").setAttribute("placeholder", thisProduct.eq(3).text());
    $("#EditFunction").setAttribute("placeholder", thisProduct.eq(4).text());
    $("#EditOrigin").setAttribute("placeholder", thisProduct.eq(5).text());
})