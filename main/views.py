from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'html/index.html', {})


def about(request):
    return render(request, 'html/about.html', {})


def contact(request):
    return render(request, 'html/contact.html', {})


def product(request):
    return render(request, 'html/product-catalog.html', {})


def three_column(request):
    return render(request, 'html/three-column.html', {})


def weixin(request):
    return render(request, 'html/weixin.html', {})


def event(request):
    return render(request, 'html/event.html', {})
