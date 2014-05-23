# coding=utf-8
from django.db import models


# Create your models here.
#产品数据库
class Product(models.Model):
    display_name = models.CharField(max_length=50)	 # 显示在图片目录页的名称
    detail_name = models.CharField(max_length=100)	 # 显示在图片详情页的名称
    material = models.CharField(max_length=50)	     # 材质
    series = models.CharField(max_length=50)	     # 系列
    function = models.CharField(max_length=50)	     # 功能
    origin = models.CharField(max_length=50)	     # 产地

    def __unicode__(self):
        return u'%s %s %s %s %s %s' % (self.display_name, self.detail_name, self.material, self.series, self.function, self.origin)

#展会数据库
class Event(models.Model):
    name = models.CharField(max_length=50)	         # 展会名称
    introduction = models.CharField(max_length=1000) # 展会简介
    detail = models.CharField(max_length=10000)	     # 展会详情
    detailHTML = models.CharField(max_length=10000)	 # 展会详情

    def __unicode__(self):
        return u'%s %s %s %s' % (self.name, self.introduction, self.detail, self.detailHTML)

#展厅活动数据库
class Hall(models.Model):
    title = models.CharField(max_length=50)	                        # 活动标题
    date = models.DateField(auto_now=False, auto_now_add=False)     # 活动日期
    introduction = models.CharField(max_length=1000)                # 活动简介
    address = models.CharField(max_length=200)	                    # 活动地址
    telephone = models.CharField(max_length=20)	                    # 联系电话
    detail = models.CharField(max_length=10000)	                    # 活动详情
    detailHTML = models.CharField(max_length=10000)	                # 活动详情

    def __unicode__(self):
        return u'%s %s %s %s %s %s %s' % (self.title, self.date, self.introduction, self.address, self.telephone, self.detail, self.detailHTML)

#"关于我们"数据库
class Aboutus(models.Model):
    theme = models.CharField(max_length=50)
    detail = models.CharField(max_length=10000)
    detailHTML = models.CharField(max_length=10000)

    def __unicode__(self):
        return u'%s %s %s' % (self.theme, self.detail, self.detailHTML)