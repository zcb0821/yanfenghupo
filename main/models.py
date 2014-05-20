# coding=utf-8
from django.db import models


# Create your models here.
class Product(models.Model):
    display_name = models.CharField(max_length=50)	 # 显示在图片目录页的名称
    detail_name = models.CharField(max_length=100)	 # 显示在图片详情页的名称
    material = models.CharField(max_length=50)	     # 材质
    series = models.CharField(max_length=50)	     # 系列
    function = models.CharField(max_length=50)	     # 功能
    origin = models.CharField(max_length=50)	     # 产地

    def __unicode__(self):
        return u'%s %s %s %s %s %s' % (self.display_name, self.detail_name, self.material, self.series, self.function, self.origin)

class Event(models.Model):
    name = models.CharField(max_length=50)	         # 活动名称
    introduction = models.CharField(max_length=1000) # 活动简介
    detail = models.CharField(max_length=10000)	     # 活动详情
    detailHTML = models.CharField(max_length=10000)	 # 活动详情

    def __unicode__(self):
        return u'%s %s %s %s' % (self.name, self.introduction, self.detail, self.detailHTML)