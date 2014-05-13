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

