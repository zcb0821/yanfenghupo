from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('main.views',
    (r'^$', 'index'),
    (r'^index/$', 'index'),
    (r'^product/theme/(\d{1})/$', 'product'),
    (r'^ProductDisplay/$', 'ProductDisplay'),
    (r'^ProductDetail/$', 'ProductDetail'),
    (r'^SearchProduct/$', 'SearchProduct'),
    (r'^SearchResult/$', 'SearchResult'),

    (r'^SetProduct/$', 'SetProduct'),
    (r'^DelProduct/$', 'DelProduct'),
    (r'^AddProduct/$', 'AddProduct'),
    (r'^GetProductId/$', 'GetProductId'),
    (r'^UploadEditPro/product/(\d{1,6})/$', 'UploadEditPro'),
    (r'^UploadAddPro/product/(\d{1,6})/$', 'UploadAddPro'),
    (r'^UploadEditEve/event/(\d{1,6})/$', 'UploadEditEve'),
    (r'^UploadAddEve/event/(\d{1,6})/$', 'UploadAddEve'),

    (r'^SetEvent/$', 'SetEvent'),
    (r'^DelEvent/$', 'DelEvent'),
    (r'^AddEvent/$', 'AddEvent'),
    (r'^GetEventId/$', 'GetEventId'),

    (r'^about/$', 'about'),
    (r'^contact/$', 'contact'),
    (r'^three-column/$', 'three_column'),
    (r'^weixin/$', 'weixin'),
    (r'^event/$', 'event'),
    (r'^admin/$', 'admin'),
    (r'^django-admin/$', include(admin.site.urls)),
    (r'^logout/$', 'logout'),
    (r'^upload/$', 'upload'),
    (r'^cktest/event/(\d{1,3})/$', 'cktest'),
)

# serve media files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# serve media files
urlpatterns += patterns('django.contrib.auth.views',
    (r'^login/$',  'login', {
        'template_name': 'html/login.html',
        'extra_context': {'next':'/admin/'}
    }),
)