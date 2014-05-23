# -*- coding: utf-8 -*-
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render
from django.shortcuts import render_to_response, RequestContext
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from models import Product, Event, Hall, Aboutus
from yanfenghupo import settings

import datetime
import sys, os, time
reload(sys)
sys.setdefaultencoding('utf-8')

# Create your views here.
def str2date(str):
    return datetime.datetime.strptime(str, '%Y-%m-%d')

def date2str(date):
    return date.strftime('%Y-%m-%d')

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

#########################################################################################################################################
@csrf_exempt
def UploadEditPro(request, product):
    ProductToEdit = Product.objects.filter(id=int(product))[0]
    #获取产品图片
    LeftBracket = "【".decode('UTF-8')
    RightBracket = "】·".decode('UTF-8')
    displaySRC = "/static/images/product-catalog/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".png"
    detailSRC = "/static/images/product-detail/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".jpg"
    return render(request, 'html/UploadEditPro.html', {'displaySRC': displaySRC, 'detailSRC': detailSRC, 'CurrentProductIdU': product})

@csrf_exempt
def UploadAddPro(request, product):
    ProductToEdit = Product.objects.filter(id=int(product))[0]
    #获取产品图片
    return render(request, 'html/UploadAddPro.html', {'CurrentProductId': product})

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
    return HttpResponse(productToAdd.id, mimetype="application/text")

#获取产品id
@csrf_exempt
def GetProductId(request):
    if request.POST.has_key('display_name'):
        CurrentProductName = request.POST['display_name']
    ProductToAdd = Product.objects.filter(display_name=CurrentProductName)
    return HttpResponse(ProductToAdd[0].id, mimetype="application/text")

#########################################################################################################################################
@csrf_exempt
def UploadEditEve(request, event):
    EventToEdit = Event.objects.filter(id=int(event))[0]
    #获取展会图片
    posterSRC = "/static/images/event/"+EventToEdit.name+".jpg"
    return render(request, 'html/UploadEditEve.html', {'posterSRC': posterSRC, 'CurrentEventIdU': event})

@csrf_exempt
def UploadAddEve(request, event):
    EventToEdit = Event.objects.filter(id=int(event))[0]
    #获取产品图片
    return render(request, 'html/UploadAddEve.html', {'CurrentEventId':event})

#修改展会信息
@csrf_exempt
def SetEvent(request):
    if request.POST.has_key('origin_name'):
        OrigName = request.POST['origin_name']
    event = Event.objects.filter(name=OrigName)
    if request.POST.has_key('name'):
        NewName = request.POST['name']
    if request.POST.has_key('introduction'):
        NewIntro = request.POST['introduction']
    AlreadyExist = Event.objects.filter(
        name=NewName,
        introduction=NewIntro
    )
    if len(AlreadyExist) != 0:
        #该展会已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    event.update(
        name=NewName,
        introduction=NewIntro
    )
    return HttpResponse(event, mimetype="application/text")

#删除展会
@csrf_exempt
def DelEvent(request):
    if request.POST.has_key('name'):
        OrigName = request.POST['name']
    eventToDel = Event.objects.get(name=OrigName)
    eventToDel.delete()
    events = Event.objects.all()
    return HttpResponse("1", mimetype="application/text")

#新增展会
@csrf_exempt
def AddEvent(request):
    if request.POST.has_key('name'):
        NewName = request.POST['name']
    if request.POST.has_key('introduction'):
        NewIntro = request.POST['introduction']
    AlreadyExist = Event.objects.filter(name=NewName)
    if len(AlreadyExist) != 0:
        #该展会已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    eventToAdd = Event(
        name=NewName,
        introduction=NewIntro,
        detail=""
    )
    eventToAdd.save()
    return HttpResponse(eventToAdd.id,mimetype="application/text")

#获取展会id
@csrf_exempt
def GetEventId(request):
    if request.POST.has_key('name'):
        CurrentEventName = request.POST['name']
    EventToAdd = Event.objects.filter(name=CurrentEventName)
    return HttpResponse(EventToAdd[0].id, mimetype="application/text")

#########################################################################################################################################
@csrf_exempt
def UploadEditHall(request, hall):
    HallToEdit = Hall.objects.filter(id=int(hall))[0]
    #获取展会图片
    posterSRC = "/static/images/hall/"+HallToEdit.title+".jpg"
    return render(request, 'html/UploadEditHall.html', {'posterSRC': posterSRC, 'CurrentHallIdU': hall})

@csrf_exempt
def UploadAddHall(request, hall):
    HallToEdit = Hall.objects.filter(id=int(hall))[0]
    #获取产品图片
    return render(request, 'html/UploadAddHall.html', {'CurrentHallId':hall})

#修改展厅活动信息
@csrf_exempt
def SetHall(request):
    if request.POST.has_key('orig_title'):
        OrigTitle = request.POST['orig_title']
    hall = Hall.objects.filter(title=OrigTitle)
    if request.POST.has_key('title'):
        NewTitle = request.POST['title']
    if request.POST.has_key('date'):
        NewDate = request.POST['date']
    if request.POST.has_key('introduction'):
        NewIntro = request.POST['introduction']
    if request.POST.has_key('address'):
        NewAddress = request.POST['address']
    if request.POST.has_key('telephone'):
        NewTelephone = request.POST['telephone']
    AlreadyExist = Hall.objects.filter(
        title=NewTitle,
        date=NewDate,
        introduction=NewIntro,
        address=NewAddress,
        telephone=NewTelephone
    )
    if len(AlreadyExist) != 0:
        #该展厅活动已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    hall.update(
        title=NewTitle,
        date=NewDate,
        introduction=NewIntro,
        address=NewAddress,
        telephone=NewTelephone
    )
    return HttpResponse(hall, mimetype="application/text")

#删除展厅活动
@csrf_exempt
def DelHall(request):
    if request.POST.has_key('title'):
        OrigTitle = request.POST['title']
    hallToDel = Hall.objects.get(title=OrigTitle)
    hallToDel.delete()
    halls = Hall.objects.all()
    return HttpResponse("1", mimetype="application/text")

#新增展厅活动
@csrf_exempt
def AddHall(request):
    if request.POST.has_key('title'):
        NewTitle = request.POST['title']
    if request.POST.has_key('date'):
        NewDate = str2date(request.POST['date'])
    if request.POST.has_key('introduction'):
        NewIntroHall = request.POST['introduction']
    if request.POST.has_key('address'):
        NewAddress = request.POST['address']
    if request.POST.has_key('telephone'):
        NewTelephone = request.POST['telephone']
    AlreadyExist = Hall.objects.filter(title=NewTitle)
    if len(AlreadyExist) != 0:
        #该展厅活动已存在
        result="AlreadyExist"
        return HttpResponse(result, mimetype="application/text")
    hallToAdd = Hall(
        title=NewTitle,
        date=NewDate,
        introduction=NewIntroHall,
        address=NewAddress,
        telephone=NewTelephone,
        detail=""
    )
    hallToAdd.save()
    return HttpResponse(hallToAdd.id,mimetype="application/text")

#获取展厅活动id
@csrf_exempt
def GetHallId(request):
    if request.POST.has_key('title'):
        CurrentHallTitle= request.POST['title']
    HallToAdd = Hall.objects.filter(title=CurrentHallTitle)
    return HttpResponse(HallToAdd[0].id, mimetype="application/text")

#########################################################################################################################################
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
@csrf_protect
def admin(request):
#    if not request.user.is_authenticated():
#        return HttpResponseRedirect('/login/')
    #编辑展会详情
    if 'CurrentEventIdE' in request.POST:
        EventId = int(request.POST['CurrentEventIdE'])
        EventToEdit = Event.objects.filter(id=EventId)
        #可能接受到展会详情的文本内容
        if 'editor1' in request.POST:
            EventDetail = request.POST['editor1']
            EventDetailToShow = EventDetail
            #可能接受到展会详情的HTML
        if 'editor2' in request.POST:
            EventDetailHTML = request.POST['editor2']
        #写入数据库
        EventToEdit.update(
            detail=EventDetail,
            detailHTML=EventDetailHTML
        )
    events = Event.objects.all()
    event_list = []
    for EventItem in events:
        if EventItem.detail == "":
            event_list.append({
                'name': EventItem.name,
                'introduction': EventItem.introduction,
                'detailToShow': "点击右侧修改图标，继续编辑本展会"
            })
        elif len(EventItem.detail) <= 30:
            event_list.append({
                'name': EventItem.name,
                'introduction': EventItem.introduction,
                'detailToShow': EventItem.detail
            })
        else:
            EventDetailToShow = EventItem.detail[0:29]+"……"
            event_list.append({
                'name': EventItem.name,
                'introduction': EventItem.introduction,
                'detailToShow': EventDetailToShow
            })
    #编辑展厅活动详情
    if 'CurrentHallIdE' in request.POST:
        HallId = int(request.POST['CurrentHallIdE'])
        HallToEdit = Hall.objects.filter(id=HallId)
        #可能接受到展厅活动详情的文本内容
        if 'editor3' in request.POST:
            HallDetail = request.POST['editor3']
            HallDetailToShow = HallDetail
            #可能接受到展厅活动详情的HTML
        if 'editor4' in request.POST:
            HallDetailHTML = request.POST['editor4']
        #写入数据库
        HallToEdit.update(
            detail=HallDetail,
            detailHTML=HallDetailHTML
        )
    halls = Hall.objects.all()
    hall_list = []
    for HallItem in halls:
        if HallItem.detail == "":
            hall_list.append({
                'title': HallItem.title,
                'date': date2str(HallItem.date),
                'introduction': HallItem.introduction,
                'address': HallItem.address,
                'telephone': HallItem.telephone,
                'detailToShow': "点击右侧修改图标，继续编辑本展厅活动"
            })
        elif len(HallItem.detail) <= 30:
            hall_list.append({
                'title': HallItem.title,
                'date': date2str(HallItem.date),
                'introduction': HallItem.introduction,
                'address': HallItem.address,
                'telephone': HallItem.telephone,
                'detailToShow': HallItem.detail
            })
        else:
            HallDetailToShow = HallItem.detail[0:29]+"……"
            hall_list.append({
                'title': HallItem.title,
                'date': date2str(HallItem.date),
                'introduction': HallItem.introduction,
                'address': HallItem.address,
                'telephone': HallItem.telephone,
                'detailToShow': HallDetailToShow
            })
    products = Product.objects.all()
    from django import forms
    class UploadFileForm(forms.Form):
        title = forms.CharField(max_length=1000000)
        file = forms.FileField()
    if request.method == "POST":
        LeftBracket = "【".decode('UTF-8')
        RightBracket = "】·".decode('UTF-8')
        if 'CurrentProductIdU' in request.POST:
        #“只修改产品图片”
            ProductId = int(request.POST['CurrentProductIdU'])
            ProductToEdit = Product.objects.filter(id=ProductId)[0]
            if 'display_picture' in request.FILES:
                display_path = "static/images/product-catalog/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".png"
                display_picture = handle_uploaded_file(request.FILES['display_picture'], display_path)
            if 'detail_picture' in request.FILES:
                detail_path = "static/images/product-detail/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".jpg"
                detail_picture = handle_uploaded_file(request.FILES['detail_picture'], detail_path)
        elif 'CurrentProductId' in request.POST:
        #“新增产品时上传产品图片”
            ProductId = int(request.POST['CurrentProductId'])
            ProductToEdit = Product.objects.filter(id=ProductId)[0]
            if 'display_picture' in request.FILES:
                display_path = "static/images/product-catalog/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".png"
                display_picture = handle_uploaded_file(request.FILES['display_picture'], display_path)
            if 'detail_picture' in request.FILES:
                detail_path = "static/images/product-detail/product-display/"+ProductToEdit.series.encode()+"/"+ProductToEdit.function.encode()+"/"+ProductToEdit.origin.encode()+"/"+LeftBracket+ProductToEdit.display_name.encode()+RightBracket+ProductToEdit.material.encode()+".jpg"
                detail_picture = handle_uploaded_file(request.FILES['detail_picture'], detail_path)
        #“只修改展会海报”
        if 'CurrentEventIdU' in request.POST:
            EventId = int(request.POST['CurrentEventIdU'])
            EventToEdit = Event.objects.filter(id=EventId)[0]
            if 'poster' in request.FILES:
                poster_path = "static/images/event/"+EventToEdit.name+".jpg"
                poster = handle_uploaded_file(request.FILES['poster'], poster_path)
        #“新增展会时上传展会海报”
        elif 'CurrentEventId' in request.POST:
            EventId = int(request.POST['CurrentEventId'])
            EventToEdit = Event.objects.filter(id=EventId)[0]
            if 'poster' in request.FILES:
                poster_path = "static/images/event/"+EventToEdit.name+".jpg"
                poster = handle_uploaded_file(request.FILES['poster'], poster_path)
        #“只修改展厅活动海报”
        if 'CurrentHallIdU' in request.POST:
            HallId = int(request.POST['CurrentHallIdU'])
            HallToEdit = Hall.objects.filter(id=HallId)[0]
            if 'poster' in request.FILES:
                poster_path = "static/images/hall/"+HallToEdit.title+".jpg"
                poster = handle_uploaded_file(request.FILES['poster'], poster_path)
        #“新增展厅活动时上传展厅活动海报”
        elif 'CurrentHallId' in request.POST:
            HallId = int(request.POST['CurrentHallId'])
            HallToEdit = Hall.objects.filter(id=HallId)[0]
            if 'poster' in request.FILES:
                poster_path = "static/images/hall/"+HallToEdit.title+".jpg"
                poster = handle_uploaded_file(request.FILES['poster'], poster_path)
        #关于我们
    AboutusContent = Aboutus.objects.all();
    #编辑公司简介
    if 'editor1CI' in request.POST:
        CIDetail = request.POST['editor1CI']
        if 'editor2CI' in request.POST:
            CIDetailHTML = request.POST['editor2CI']
            AboutusContent.filter(theme="公司简介").update(
                detail=CIDetail,
                detailHTML=CIDetailHTML
            )
    #编辑品牌简介
    if 'editor1BI' in request.POST:
        BIDetail = request.POST['editor1BI']
        if 'editor2BI' in request.POST:
            BIDetailHTML = request.POST['editor2BI']
            AboutusContent.filter(theme="品牌简介").update(
                detail=BIDetail,
                detailHTML=BIDetailHTML
            )
    #编辑品牌特色
    if 'editor1BSP' in request.POST:
        BSPDetail = request.POST['editor1BSP']
        if 'editor2BSP' in request.POST:
            BSPDetailHTML = request.POST['editor2BSP']
            AboutusContent.filter(theme="品牌特色").update(
                detail=BSPDetail,
                detailHTML=BSPDetailHTML
            )
    #编辑品牌服务
    if 'editor1BSE' in request.POST:
        BSEDetail = request.POST['editor1BSE']
        if 'editor2BSE' in request.POST:
            BSEDetailHTML = request.POST['editor2BSE']
            AboutusContent.filter(theme="品牌服务").update(
                detail=BSEDetail,
                detailHTML=BSEDetailHTML
            )
    return render_to_response("html/admin.html", {
        'products': products,
        'events': event_list,
        'halls': hall_list,
        'ComIntro': AboutusContent[0].detail,
        'BrandIntro': AboutusContent[1].detail,
        'special': AboutusContent[2].detail,
        'service': AboutusContent[3].detail
    }, context_instance=RequestContext(request))

@csrf_exempt
def handle_uploaded_file(f, f_path):
    with open(f_path, 'wb+') as info:
        print f.name
        for chunk in f.chunks():
            info.write(chunk)
    return f
#上传文件结束

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
def cktest(request, event):
    #编辑展会的时候可能展会详情本身就有原始输入
    #从数据库中读取原始Detail
    eventToEdit = Event.objects.get(id=int(event))
    #将原始Detail显示到编辑框
    return render(request, 'html/cktest.html', {'CurrentEventIdE': event, 'CurrentEventDetail': eventToEdit.detail})

@csrf_exempt
def cktest2(request, hall):
    #编辑展会的时候可能展厅活动详情本身就有原始输入
    #从数据库中读取原始Detail
    hallToEdit = Hall.objects.get(id=int(hall))
    #将原始Detail显示到编辑框
    return render(request, 'html/cktest2.html', {'CurrentHallIdE': hall, 'CurrentHallDetail': hallToEdit.detail})

@csrf_exempt
def cktestCI(request):
    str = Aboutus.objects.get(theme="公司简介").detail
    return render(request, 'html/cktestCI.html', {'CurrentCIDetail': str})

@csrf_exempt
def cktestBI(request):
    str = Aboutus.objects.get(theme="品牌简介").detail
    return render(request, 'html/cktestBI.html', {'CurrentBIDetail': str})

@csrf_exempt
def cktestBSP(request):
    str = Aboutus.objects.get(theme="品牌特色").detail
    return render(request, 'html/cktestBSP.html', {'CurrentBSPDetail': str})

@csrf_exempt
def cktestBSE(request):
    str = Aboutus.objects.get(theme="品牌服务").detail
    return render(request, 'html/cktestBSE.html', {'CurrentBSEDetail': str})