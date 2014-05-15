# -*- coding: utf-8 -*-
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from models import Product

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
    for i in range(len(products)):
        bgSRCs.append("/static/images/product-catalog/bg" + str(i%4+1) + ".png")
        bgStyles.append("left:" + str(i*180) + "px")
        NameStyles.append("left:" + str(i*180+149) + "px")
        displaySRCs.append("/static/images/product-catalog/product-display/"+products[i].series+"/"+products[i].function+"/"+products[i].origin+"/"+LeftBracket+products[i].display_name+RightBracket+products[i].material+".png")
    for i in range(len(products)):
        product_list.append({'product': products[i], 'bgSRC': bgSRCs[i], 'bgStyle': bgStyles[i], 'NameStyle': NameStyles[i], 'displaySRC': displaySRCs[i]})
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
def three_column(request):
    return render(request, 'html/three-column.html', {})


@csrf_exempt
def weixin(request):
    return render(request, 'html/weixin.html', {})


@csrf_exempt
def event(request):
    return render(request, 'html/event.html', {})