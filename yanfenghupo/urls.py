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
    (r'^about/$', 'about'),
    (r'^contact/$', 'contact'),
    (r'^three-column/$', 'three_column'),
    (r'^weixin/$', 'weixin'),
    (r'^event/$', 'event'),
    (r'^admin/$', 'admin'),
    (r'^django-admin/$', include(admin.site.urls)),
    (r'^logout/$', 'logout'),
    (r'^upload/$', 'upload'),
    (r'^cktest/$', 'cktest'),
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