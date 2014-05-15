# Host: localhost  (Version: 5.5.20)
# Date: 2014-05-15 20:00:33
# Generator: MySQL-Front 5.3  (Build 4.121)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "auth_group"
#

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_group"
#


#
# Structure for table "auth_user"
#

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "auth_user"
#

INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$10000$VZi7JGO6yYev$iD0OVMzhwIYIlWN5lfCHkScIlr3izLU0InNNrku9XzA=','2014-05-13 17:46:58',1,'admin','','','drq11@mails.tsinghua.edu.cn',1,1,'2014-05-13 17:46:58');

#
# Structure for table "auth_user_groups"
#

DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_6340c63c` (`user_id`),
  KEY `auth_user_groups_5f412f9a` (`group_id`),
  CONSTRAINT `group_id_refs_id_274b862c` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `user_id_refs_id_40c41112` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_user_groups"
#


#
# Structure for table "django_content_type"
#

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_label` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "django_content_type"
#

INSERT INTO `django_content_type` VALUES (1,'permission','auth','permission'),(2,'group','auth','group'),(3,'user','auth','user'),(4,'content type','contenttypes','contenttype'),(5,'session','sessions','session'),(6,'product','main','product');

#
# Structure for table "auth_permission"
#

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  KEY `auth_permission_37ef4eb4` (`content_type_id`),
  CONSTRAINT `content_type_id_refs_id_d043b34a` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

#
# Data for table "auth_permission"
#

INSERT INTO `auth_permission` VALUES (1,'Can add permission',1,'add_permission'),(2,'Can change permission',1,'change_permission'),(3,'Can delete permission',1,'delete_permission'),(4,'Can add group',2,'add_group'),(5,'Can change group',2,'change_group'),(6,'Can delete group',2,'delete_group'),(7,'Can add user',3,'add_user'),(8,'Can change user',3,'change_user'),(9,'Can delete user',3,'delete_user'),(10,'Can add content type',4,'add_contenttype'),(11,'Can change content type',4,'change_contenttype'),(12,'Can delete content type',4,'delete_contenttype'),(13,'Can add session',5,'add_session'),(14,'Can change session',5,'change_session'),(15,'Can delete session',5,'delete_session'),(16,'Can add product',6,'add_product'),(17,'Can change product',6,'change_product'),(18,'Can delete product',6,'delete_product');

#
# Structure for table "auth_user_user_permissions"
#

DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_6340c63c` (`user_id`),
  KEY `auth_user_user_permissions_83d7f98b` (`permission_id`),
  CONSTRAINT `permission_id_refs_id_35d9ac25` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `user_id_refs_id_4dc23c39` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_user_user_permissions"
#


#
# Structure for table "auth_group_permissions"
#

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_5f412f9a` (`group_id`),
  KEY `auth_group_permissions_83d7f98b` (`permission_id`),
  CONSTRAINT `group_id_refs_id_f4b32aac` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `permission_id_refs_id_6ba0f519` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_group_permissions"
#


#
# Structure for table "django_session"
#

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_b7b81f0c` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "django_session"
#


#
# Structure for table "main_product"
#

DROP TABLE IF EXISTS `main_product`;
CREATE TABLE `main_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(50) NOT NULL DEFAULT '',
  `detail_name` varchar(100) NOT NULL,
  `material` varchar(50) NOT NULL,
  `series` varchar(50) NOT NULL,
  `function` varchar(50) NOT NULL,
  `origin` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

#
# Data for table "main_product"
#

INSERT INTO `main_product` VALUES (1,'云芝','蜜蜡灵芝小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(2,'天禄','蜜蜡貔貅小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(3,'珠玉满堂','蜜蜡摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(4,'风仪','蜜蜡牡丹花小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(5,'鹤鹤有鸣','蜜蜡摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(6,'凤赫于鸣','金蓝百鸟朝凤摆件·缅甸','蓝珀','雕刻','摆件','缅甸'),(7,'一笑千年','蓝绿布袋佛摆件·墨西哥','蓝珀','雕刻','摆件','墨西哥'),(8,'鱼跃','蓝珀雕刻件·多米尼加','蓝珀','雕刻','雕刻件','多米尼加'),(9,'长生','蓝珀雕刻件·多米尼加','蓝珀','雕刻','雕刻件','多米尼加'),(10,'蓝姬','蓝绿雕刻件·缅甸','蓝珀','雕刻','雕刻件','缅甸'),(11,'子幼','蓝绿雕刻件·缅甸','蓝珀','雕刻','雕刻件','缅甸'),(12,'武财神','蜜蜡关公手把件·波罗的海','蜜蜡','雕刻','手把件','波罗的海'),(13,'众生','蜜蜡笑佛手把件·波罗的海','蜜蜡','雕刻','手把件','波罗的海'),(14,'千年','老蜜108佛珠·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(15,'垂衣','老蜜鼓珠·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(16,'夜华','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(17,'寸光','老蜜桶珠·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(18,'拈花','双色108佛珠·波罗的海','双色','饰品','编织特色','波罗的海'),(19,'明堂','老蜜手串·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(20,'星耀','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(21,'玛尼','老蜜蜡手串·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(22,'福运','双色手串·波罗的海','双色','饰品','编织特色','波罗的海'),(23,'红豆','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(24,'金魄','蜜蜡手串·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(25,'冥思','观音蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(26,'出兜率天','佛蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(27,'初雨','双鱼蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(28,'沁甜','南瓜金包蜜吊坠-波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(29,'沉鱼','蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(30,'甘瓠蜜','葫芦金绞蜜吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(31,'蝶恋','蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(32,'迷醉','玫瑰花蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(33,'鱼生','白蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(34,'钟情','蓝珀吊坠·多米尼加','蓝珀','饰品','吊坠','多米尼加'),(35,'海蓝','金蓝平安扣·缅甸','蓝珀','饰品','吊坠','缅甸'),(36,'喜上梅梢','金蓝吊坠·缅甸','蓝珀','饰品','吊坠','缅甸'),(37,'为你','蓝珀耳钉·多米尼加','蓝珀','饰品','戒指和耳钉','多米尼加'),(38,'一世','蓝珀戒指·多米尼加','蓝珀','饰品','戒指和耳钉','多米尼加'),(39,'缓缓归','老蜜蜡手镯·波罗的海','蜜蜡','饰品','手镯','波罗的海'),(40,'陌上花','白蜜蜡手镯·波罗的海','蜜蜡','饰品','手镯','波罗的海'),(41,'蓝翎','蓝绿手镯·墨西哥','蓝珀','饰品','手镯','墨西哥'),(42,'光炫','金珀108粒佛珠·波罗的海','金珀','珠串','佛珠','波罗的海'),(43,'莲华','老蜜108粒佛珠·波罗的海','蜜蜡','珠串','佛珠','波罗的海'),(44,'琴易','双色108粒佛珠·波罗的海','双色','珠串','佛珠','波罗的海'),(45,'幻泪','蓝珀108粒佛珠·多米尼加','蓝珀','珠串','佛珠','多米尼加'),(46,'思韵','老蜜蜡鸡油黄桶珠·波罗的海','蜜蜡','珠串','手串','波罗的海'),(47,'神现','白花手串·波罗的海','白花','珠串','手串','波罗的海'),(48,'重灵','老蜜蜡手串·波罗的海','蜜蜡','珠串','手串','波罗的海'),(49,'阑珊','血珀手串·波罗的海','血珀','珠串','手串','波罗的海'),(50,'池眠','蓝珀手串·多米尼加','蓝珀','珠串','手串','多米尼加');
