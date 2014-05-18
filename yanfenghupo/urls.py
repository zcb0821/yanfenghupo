from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login, logout
from django.conf import settings
from django.conf.urls.static import static

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
    (r'^accounts/login/$',  login, {'template_name': 'html/login.html'}),
    (r'^accounts/logout/$', logout),
)

# serve media files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)