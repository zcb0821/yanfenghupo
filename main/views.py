# -*- coding: utf-8 -*-
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from models import Product
from yanfenghupo import settings
import sys, os, time
reload(sys)
sys.setdefaultencoding('utf-8')

# Create your views here.
@csrf_exempt
def index(request):
    return render(request, 'html/index.html', {})


@csrf_exempt
def about(request):
    return render(request, 'html/about.html', {})


@csrf_exempt
def contact(request):
    return render(request, 'html/contact.html', {})


@csrf_exempt
def getProductFromDB(request, products, url):
    product_list = []
    bgSRCs = []
    bgStyles = []
    NameStyles = []
    displaySRCs = []
    LeftBracket = "【".decode('UTF-8')
    RightBracket = "】·".decode('UTF-8')
    DetailStyles1 = []
    DetailStyles2 = []
    detailSRCs = []
    DetailStyles3 = []
    for i in range(len(products)):
        # 为产品目录页准备数据
        bgSRCs.append("/static/images/product-catalog/bg" + str(i%4+1) + ".png")
        bgStyles.append("left:" + str(i*180) + "px")
        NameStyles.append("left:" + str(i*180+149) + "px")
        displaySRCs.append("/static/images/product-catalog/product-display/"+products[i].series+"/"+products[i].function+"/"+products[i].origin+"/"+LeftBracket+products[i].display_name+RightBracket+products[i].material+".png")
        # 为产品详情页准备数据
        DetailStyles1.append("left:" + str(i*815) + "px;width:720px;height:420px")
        DetailStyles2.append("left:" + str(10+i*815) + "px;top:10px;width:600px;height:400px")
        detailSRCs.append("/static/images/product-detail/product-display/"+products[i].series+"/"+products[i].function+"/"+products[i].origin+"/"+LeftBracket+products[i].display_name+RightBracket+products[i].material+".jpg")
        DetailStyles3.append("left:" + str(648+i*815) + "px")
    for i in range(len(products)):
        product_list.append({
            'product': products[i],
            'bgSRC': bgSRCs[i],
            'bgStyle': bgStyles[i],
            'NameStyle': NameStyles[i],
            'displaySRC': displaySRCs[i],
            'detailSRC': detailSRCs[i],
            'DetailStyle1': DetailStyles1[i],
            'DetailStyle2': DetailStyles2[i],
            'DetailStyle3': DetailStyles3[i]
        })
    return render_to_response(url, {'product_list': product_list})


@csrf_exempt
def product(request, theme):
    if theme == "1":
        level1 = "雕刻"
    elif theme == "2":
        level1 = "饰品"
    else:
        level1 = "珠串"
    products = Product.objects.filter(series=level1)
    return getProductFromDB(request, products, 'html/product-catalog.html')


@csrf_exempt
def ProductDisplay(request):
    if request.POST.has_key('series'):
        level1 = request.POST['series']
        products = Product.objects.filter(series=level1)
    if request.POST.has_key('function'):
        level2 = request.POST['function']
        products = Product.objects.filter(series=level1,function=level2)
    if request.POST.has_key('origin'):
        level3 = request.POST['origin']
        products = Product.objects.filter(series=level1,function=level2, origin=level3)
    return getProductFromDB(request, products, 'html/product-display.html')


@csrf_exempt
def ProductDetail(request):
    if request.POST.has_key('display_name'):
        DisplayName = request.POST['display_name']
    else:
        return  None
    products = Product.objects.filter(display_name=DisplayName)
    if len(products) != 1:
        return None
    return HttpResponse(products[0].detail_name, mimetype="application/text")


@csrf_exempt
def SearchProduct(request):
    return render(request, 'html/SearchProduct.html', {})


@csrf_exempt
def SearchResult(request):
    products = Product.objects.all()
    if request.POST.has_key('series'):
        SearchSeries = request.POST['series']
        products = products.filter(series=SearchSeries)
    if request.POST.has_key('function'):
        SearchFunction = request.POST['function']
        products = products.filter(function=SearchFunction)
    if request.POST.has_key('origin'):
        SearchOrigin = request.POST['origin']
        products = products.filter(origin=SearchOrigin)
    if request.POST.has_key('material'):
        SearchMaterial = request.POST['material']
        # 只要不是"蓝珀"、"血珀"、"金珀"、"白花"，就是"蜜蜡"
        if SearchMaterial == u"蜜蜡":
            PrePro = []
            for item in products:
                if item.material != u"蓝珀" and item.material != u"血珀" and item.material != u"金珀" and item.material != u"白花":
                    PrePro.append(item)
            products = PrePro
        else:
            products = products.filter(material=SearchMaterial)
    if request.POST.has_key('KeyName'):
        SearchKeyName = request.POST['KeyName'].encode()
        finalPro = []
        for item in products:
            if item.display_name.encode().find(SearchKeyName)>=0:
                finalPro.append(item)
        products = finalPro
    return render_to_response("html/SearchResult.html", {'result_list': products})


#修改产品信息
@csrf_exempt
def SetProduct(request):
    if request.POST.has_key('origin_name'):
        OrigName = request.POST['origin_name']
    if request.POST.has_key('origin_detail'):
        OrigDetail = request.POST['origin_detail']
    if request.POST.has_key('origin_material'):
        OrigMaterial = request.POST['origin_material']
    if request.POST.has_key('origin_series'):
        OrigSeries = request.POST['origin_series']
    if request.POST.has_key('origin_function'):
        OrigFunction = request.POST['origin_function']
    if request.POST.has_key('origin_origin'):
        OrigOrigin = request.POST['origin_origin']
    product = Product.objects.filter(
        display_name=OrigName,
        detail_name=OrigDetail,
        material=OrigMaterial,
        series=OrigSeries,
        function=OrigFunction,
        origin=OrigOrigin
    )

    if request.POST.has_key('display_name'):
        NewDisplayName = request.POST['display_name']
    if request.POST.has_key('detail_name'):
        NewDetailName = request.POST['detail_name']
    if request.POST.has_key('material'):
        NewMaterial = request.POST['material']
    if request.POST.has_key('series'):
        NewSeries = request.POST['series']
    if request.POST.has_key('function'):
        NewFunction = request.POST['function']
    if request.POST.has_key('origin'):
        NewOrigin = request.POST['origin']
    AlreadyExist = Product.objects.filter(
        display_name=NewDisplayName,
        detail_name=NewDetailName,
        material=NewMaterial,
        series=NewSeries,
        function=NewFunction,
        origin=NewOrigin
    )
    if len(AlreadyExist) != 0:
        #该产品已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    product.update(
        display_name=NewDisplayName,
        detail_name=NewDetailName,
        material=NewMaterial,
        series=NewSeries,
        function=NewFunction,
        origin=NewOrigin
    )
    return HttpResponse(product, mimetype="application/text")


#删除产品
@csrf_exempt
def DelProduct(request):
    if request.POST.has_key('display_name'):
        OrigName = request.POST['display_name']
    if request.POST.has_key('detail_name'):
        OrigDetail = request.POST['detail_name']
    if request.POST.has_key('material'):
        OrigMaterial = request.POST['material']
    if request.POST.has_key('series'):
        OrigSeries = request.POST['series']
    if request.POST.has_key('function'):
        OrigFunction = request.POST['function']
    if request.POST.has_key('origin'):
        OrigOrigin = request.POST['origin']
    productToDel = Product.objects.get(
        display_name=OrigName,
        detail_name=OrigDetail,
        material=OrigMaterial,
        series=OrigSeries,
        function=OrigFunction,
        origin=OrigOrigin
    )
    productToDel.delete()
    products = Product.objects.all()
    return HttpResponse("1", mimetype="application/text")


#新增产品
@csrf_exempt
def AddProduct(request):
    if request.POST.has_key('display_name'):
        NewDisplayName = request.POST['display_name']
    if request.POST.has_key('detail_name'):
        NewDetailName = request.POST['detail_name']
    if request.POST.has_key('material'):
        NewMaterial = request.POST['material']
    if request.POST.has_key('series'):
        NewSeries = request.POST['series']
    if request.POST.has_key('function'):
        NewFunction = request.POST['function']
    if request.POST.has_key('origin'):
        NewOrigin = request.POST['origin']
    AlreadyExist = Product.objects.filter(
        display_name=NewDisplayName,
        detail_name=NewDetailName,
        material=NewMaterial,
        series=NewSeries,
        function=NewFunction,
        origin=NewOrigin
    )
    if len(AlreadyExist) != 0:
        #该产品已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    productToAdd = Product(
        display_name=NewDisplayName,
        detail_name=NewDetailName,
        material=NewMaterial,
        series=NewSeries,
        function=NewFunction,
        origin=NewOrigin
    )
    productToAdd.save()
    return HttpResponse(productToAdd, mimetype="application/text")


@csrf_exempt
def three_column(request):
    return render(request, 'html/three-column.html', {})


@csrf_exempt
def weixin(request):
    return render(request, 'html/weixin.html', {})


@csrf_exempt
def event(request):
    return render(request, 'html/event.html', {})

@csrf_exempt
def admin(request):
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/login/')
    products = Product.objects.all()
    return render_to_response("html/admin.html", {'products': products})


@csrf_exempt
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login/')

@csrf_exempt
def upload(request):
    if request.method == 'POST':
        try:
            uploadfile =  request.FILES['upload']
            filename = str(time.time()) + '_' +  uploadfile.name
            filepath = os.path.abspath(os.path.join(settings.BASE_DIR, 'media/images/' + filename))
            with open(filepath, 'wb') as destination:
                for chunk in uploadfile.chunks():
                    destination.write(chunk)
                destination.close()
            return HttpResponse('<script type="text/javascript">'
                                'window.parent.CKEDITOR.tools.callFunction(%s, "%s");'
                                '</script>' % (request.GET['CKEditorFuncNum'], '/media/images/' + filename))
        except:
            return HttpResponse('{"error": "error"}')
    else:
        return HttpResponse('{"error": "error"}')

@csrf_exempt
def cktest(request):
    return render(request, 'html/cktest.html', {})
