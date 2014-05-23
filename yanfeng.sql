# Host: localhost  (Version: 5.5.20)
# Date: 2014-05-24 04:14:21
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "auth_user"
#

INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$10000$VZi7JGO6yYev$iD0OVMzhwIYIlWN5lfCHkScIlr3izLU0InNNrku9XzA=','2014-05-13 17:46:58',1,'admin','','','drq11@mails.tsinghua.edu.cn',1,1,'2014-05-13 17:46:58'),(2,'pbkdf2_sha256$10000$pAn2Vz0FmJcG$FdBfGqsJF+kc1lkqms84zj7fEth+P55Ix+86hyyCzwc=','2014-05-19 12:11:12',1,'yanfeng','','','yanfenghui_nanshe@163.com',1,1,'2014-05-19 12:09:50');

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "django_content_type"
#

INSERT INTO `django_content_type` VALUES (1,'permission','auth','permission'),(2,'group','auth','group'),(3,'user','auth','user'),(4,'content type','contenttypes','contenttype'),(5,'session','sessions','session'),(6,'product','main','product'),(7,'log entry','admin','logentry'),(8,'event','main','event'),(9,'hall','main','hall'),(10,'aboutus','main','aboutus');

#
# Structure for table "django_admin_log"
#

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_refs_id_c0d12874` (`user_id`),
  KEY `content_type_id_refs_id_93d2d1f8` (`content_type_id`),
  CONSTRAINT `content_type_id_refs_id_93d2d1f8` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `user_id_refs_id_c0d12874` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "django_admin_log"
#


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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

#
# Data for table "auth_permission"
#

INSERT INTO `auth_permission` VALUES (1,'Can add permission',1,'add_permission'),(2,'Can change permission',1,'change_permission'),(3,'Can delete permission',1,'delete_permission'),(4,'Can add group',2,'add_group'),(5,'Can change group',2,'change_group'),(6,'Can delete group',2,'delete_group'),(7,'Can add user',3,'add_user'),(8,'Can change user',3,'change_user'),(9,'Can delete user',3,'delete_user'),(10,'Can add content type',4,'add_contenttype'),(11,'Can change content type',4,'change_contenttype'),(12,'Can delete content type',4,'delete_contenttype'),(13,'Can add session',5,'add_session'),(14,'Can change session',5,'change_session'),(15,'Can delete session',5,'delete_session'),(16,'Can add product',6,'add_product'),(17,'Can change product',6,'change_product'),(18,'Can delete product',6,'delete_product'),(19,'Can add log entry',7,'add_logentry'),(20,'Can change log entry',7,'change_logentry'),(21,'Can delete log entry',7,'delete_logentry'),(22,'Can add event',8,'add_event'),(23,'Can change event',8,'change_event'),(24,'Can delete event',8,'delete_event'),(25,'Can add hall',9,'add_hall'),(26,'Can change hall',9,'change_hall'),(27,'Can delete hall',9,'delete_hall'),(28,'Can add aboutus',10,'add_aboutus'),(29,'Can change aboutus',10,'change_aboutus'),(30,'Can delete aboutus',10,'delete_aboutus');

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

INSERT INTO `django_session` VALUES ('1xqw3uoktli5fjextgt8skso1a75bljr','ZGFjNzM4ZWFiNDZjZjEyMDc5NjFkZmYwNzBjNDA0NDcwNDc0MGU0MDqAAn1xAVgKAAAAdGVzdGNvb2tpZXECWAYAAAB3b3JrZWRxA3Mu','2014-06-02 12:03:07'),('6bxkkzhxk5ouz2nzp91mjgo7cj6tzlvi','NWU2MGRlMTQ4YTM5OGUxMjEwODczMjJjZGM5NDg3OGFmNGM3NDIzYjqAAn1xAVgKAAAAdGVzdGNvb2tpZVgGAAAAd29ya2VkcQJzLg==','2014-06-01 11:42:48'),('bi4ui5ogwif3bdporpujphqtod6gseil','NWU2MGRlMTQ4YTM5OGUxMjEwODczMjJjZGM5NDg3OGFmNGM3NDIzYjqAAn1xAVgKAAAAdGVzdGNvb2tpZVgGAAAAd29ya2VkcQJzLg==','2014-06-02 13:06:28'),('g2a0laq9pzxa2qul1xir6y71ngnxaajt','NWU2MGRlMTQ4YTM5OGUxMjEwODczMjJjZGM5NDg3OGFmNGM3NDIzYjqAAn1xAVgKAAAAdGVzdGNvb2tpZVgGAAAAd29ya2VkcQJzLg==','2014-06-02 11:22:34'),('msfo1851zd7rt920j2j4qpjlv8eum4fr','NWU2MGRlMTQ4YTM5OGUxMjEwODczMjJjZGM5NDg3OGFmNGM3NDIzYjqAAn1xAVgKAAAAdGVzdGNvb2tpZVgGAAAAd29ya2VkcQJzLg==','2014-06-01 11:32:08'),('xygtiwdvo7fk42mat54mynz5eer41goi','NWU2MGRlMTQ4YTM5OGUxMjEwODczMjJjZGM5NDg3OGFmNGM3NDIzYjqAAn1xAVgKAAAAdGVzdGNvb2tpZVgGAAAAd29ya2VkcQJzLg==','2014-06-02 12:11:39');

#
# Structure for table "main_aboutus"
#

DROP TABLE IF EXISTS `main_aboutus`;
CREATE TABLE `main_aboutus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `theme` varchar(50) NOT NULL,
  `detail` varchar(10000) NOT NULL,
  `detailHTML` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "main_aboutus"
#

INSERT INTO `main_aboutus` VALUES (1,'公司简介','<p>&nbsp; &nbsp; 衍峰（北京）文化有限公司，是以金丝楠和琥珀产品设计领先，制造与商业两翼齐飞、国内与国外市场共同发展的民营企业，衍峰致力于打造中国家居自然生活，也开拓了房地产公关活动业务。经过多年的前期积累，在奢侈品领域，产品一经面市即迅速成为业界领导品牌，被誉为中国民营企业发展的璀璨新星。</p>\r\n\r\n<p>&nbsp; &nbsp; 公司注册资本500万，旗下拥有&ldquo;楠舍&rdquo;金丝楠和&ldquo;衍峰&rdquo;琥珀两大品牌，同时开拓房地产公关活动，打造奢侈品与活动策划相得益彰的璀璨星光。办公，工厂，会所等面积近2万平米。2013年达成与清华大学的战略合作，对于金丝楠和琥珀产品设计提供专业的技术支持。目前公司拥有近百人的技术和销售团队。下设七个部门，两大制造基地，生产流程、工艺技术具备国际先进水平，能适应多品种高品质快速供货服务需求；国内市场网络已覆盖60%的一、二级城市以及70%以上的三级城市，国际市场涵盖全球10多个国家和地区，构成了衍峰多层次、全方位的网络体系，成为衍峰品牌发展的有力臂膀。</p>\r\n\r\n<p>&nbsp; &nbsp; 衍峰坚守&ldquo;人为本，以诚信为先，以创造价值为荣&rdquo;的核心理念和&ldquo;不断超越自我，团队合作，勤勉务实&rdquo;的企业精神，培育和锻造出独具特色的企业文化，以设计领先、品质优秀、成本卓越的产品，以精、准、快的服务，形成衍峰持久、强大的核心竞争力，为衍峰的健康、平稳、快速发展奠定了坚实基础。</p>\r\n\r\n<p>未来的衍峰，将以国际化的战略视野与能力，以资本、品牌、文化为纽带，全力缔造更为卓越的商业、制造和管理新模式；将致力于打造中国人自己的世界名牌，铸就一个国际化的衍峰，为实践&ldquo;衍峰&bull;高素质生活&rdquo;不懈努力。</p>\r\n\r\n<p>&nbsp;</p>\r\n','<head><title data-cke-title=\"所见即所得编辑器, editor3\">所见即所得编辑器, editor3</title><style data-cke-temp=\"1\">html{cursor:text;*cursor:auto}\r\nimg,input,textarea{cursor:default}</style><link type=\"text/css\" rel=\"stylesheet\" href=\"http://127.0.0.1:8000/static/ckeditor/contents.css?t=E3OD\"><style data-cke-temp=\"1\">.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}\r\n.cke_contents_ltr a.cke_anchor,.cke_contents_ltr a.cke_anchor_empty,.cke_editable.cke_contents_ltr a[name],.cke_editable.cke_contents_ltr a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;padding-left:18px;cursor:auto;}.cke_contents_ltr img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}.cke_contents_rtl a.cke_anchor,.cke_contents_rtl a.cke_anchor_empty,.cke_editable.cke_contents_rtl a[name],.cke_editable.cke_contents_rtl a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;padding-right:18px;cursor:auto;}.cke_contents_rtl img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}\r\n.cke_show_borders  table.cke_show_border,.cke_show_borders  table.cke_show_border > tr > td, .cke_show_borders  table.cke_show_border > tr > th,.cke_show_borders  table.cke_show_border > tbody > tr > td, .cke_show_borders  table.cke_show_border > tbody > tr > th,.cke_show_borders  table.cke_show_border > thead > tr > td, .cke_show_borders  table.cke_show_border > thead > tr > th,.cke_show_borders  table.cke_show_border > tfoot > tr > td, .cke_show_borders  table.cke_show_border > tfoot > tr > th{border : #d3d3d3 1px dotted}</style></head><body contenteditable=\"true\" class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\" spellcheck=\"false\"><p>    衍峰（北京）文化有限公司，是以金丝楠和琥珀产品设计领先，制造与商业两翼齐飞、国内与国外市场共同发展的民营企业，衍峰致力于打造中国家居自然生活，也开拓了房地产公关活动业务。经过多年的前期积累，在奢侈品领域，产品一经面市即迅速成为业界领导品牌，被誉为中国民营企业发展的璀璨新星。<br></p><p>    公司注册资本500万，旗下拥有“楠舍”金丝楠和“衍峰”琥珀两大品牌，同时开拓房地产公关活动，打造奢侈品与活动策划相得益彰的璀璨星光。办公，工厂，会所等面积近2万平米。2013年达成与清华大学的战略合作，对于金丝楠和琥珀产品设计提供专业的技术支持。目前公司拥有近百人的技术和销售团队。下设七个部门，两大制造基地，生产流程、工艺技术具备国际先进水平，能适应多品种高品质快速供货服务需求；国内市场网络已覆盖60%的一、二级城市以及70%以上的三级城市，国际市场涵盖全球10多个国家和地区，构成了衍峰多层次、全方位的网络体系，成为衍峰品牌发展的有力臂膀。<br></p><p>    衍峰坚守“人为本，以诚信为先，以创造价值为荣”的核心理念和“不断超越自我，团队合作，勤勉务实”的企业精神，培育和锻造出独具特色的企业文化，以设计领先、品质优秀、成本卓越的产品，以精、准、快的服务，形成衍峰持久、强大的核心竞争力，为衍峰的健康、平稳、快速发展奠定了坚实基础。<br></p><p>未来的衍峰，将以国际化的战略视野与能力，以资本、品牌、文化为纽带，全力缔造更为卓越的商业、制造和管理新模式；将致力于打造中国人自己的世界名牌，铸就一个国际化的衍峰，为实践“衍峰•高素质生活”不懈努力。<br></p><p></p></body>'),(2,'品牌简介','<p>&nbsp; &nbsp; 全球珍稀琥珀的缔造者衍峰琥珀，缘起于2007年，世代传承的时光流过，积淀了荣耀沧桑。</p>\r\n\r\n<p>&nbsp; &nbsp; 时至今日，衍峰琥珀凭借稀世的材质、傲世的传统雕刻工艺，以及融汇新中式设计理念的恢弘造诣，已成功步入全球顶级的琥珀品牌行列，成为传统与经典的代名词。</p>\r\n\r\n<p>&nbsp; &nbsp; 衍峰琥珀，表现出富有东方神韵而又高雅独特的时尚风格，倍受时尚界关注。她继承了中国深厚的文化艺术传统，始终保持古典风格的设计路线，每一件匠心之作均来自神思之点滴。同时，为适应现代时尚人士的审美品味，衍峰琥珀在设计中融合了时尚洒脱、优雅自信的现代人文精神和个性内涵，已成为中国琥珀文化的风向标。</p>\r\n\r\n<p>&nbsp;</p>\r\n','<head><title data-cke-title=\"所见即所得编辑器, editor3\">所见即所得编辑器, editor3</title><style data-cke-temp=\"1\">html{cursor:text;*cursor:auto}\r\nimg,input,textarea{cursor:default}</style><link type=\"text/css\" rel=\"stylesheet\" href=\"http://127.0.0.1:8000/static/ckeditor/contents.css?t=E3OD\"><style data-cke-temp=\"1\">.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}\r\n.cke_contents_ltr a.cke_anchor,.cke_contents_ltr a.cke_anchor_empty,.cke_editable.cke_contents_ltr a[name],.cke_editable.cke_contents_ltr a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;padding-left:18px;cursor:auto;}.cke_contents_ltr img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}.cke_contents_rtl a.cke_anchor,.cke_contents_rtl a.cke_anchor_empty,.cke_editable.cke_contents_rtl a[name],.cke_editable.cke_contents_rtl a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;padding-right:18px;cursor:auto;}.cke_contents_rtl img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}\r\n.cke_show_borders  table.cke_show_border,.cke_show_borders  table.cke_show_border > tr > td, .cke_show_borders  table.cke_show_border > tr > th,.cke_show_borders  table.cke_show_border > tbody > tr > td, .cke_show_borders  table.cke_show_border > tbody > tr > th,.cke_show_borders  table.cke_show_border > thead > tr > td, .cke_show_borders  table.cke_show_border > thead > tr > th,.cke_show_borders  table.cke_show_border > tfoot > tr > td, .cke_show_borders  table.cke_show_border > tfoot > tr > th{border : #d3d3d3 1px dotted}</style></head><body contenteditable=\"true\" class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\" spellcheck=\"false\"><p>    全球珍稀琥珀的缔造者衍峰琥珀，缘起于2007年，世代传承的时光流过，积淀了荣耀沧桑。<br></p><p>    时至今日，衍峰琥珀凭借稀世的材质、傲世的传统雕刻工艺，以及融汇新中式设计理念的恢弘造诣，已成功步入全球顶级的琥珀品牌行列，成为传统与经典的代名词。<br></p><p>    衍峰琥珀，表现出富有东方神韵而又高雅独特的时尚风格，倍受时尚界关注。她继承了中国深厚的文化艺术传统，始终保持古典风格的设计路线，每一件匠心之作均来自神思之点滴。同时，为适应现代时尚人士的审美品味，衍峰琥珀在设计中融合了时尚洒脱、优雅自信的现代人文精神和个性内涵，已成为中国琥珀文化的风向标。<br></p><p></p></body>'),(3,'品牌特色','<p><strong>东方经典琥珀第一品牌</strong></p>\r\n\r\n<p>&nbsp; &nbsp; 衍峰琥珀提倡趋于完美的生活方式，做每个追求完美生活的人都能拥有的精品琥珀。</p>\r\n\r\n<p>&nbsp; &nbsp; 她渲染着充满爱且优雅生活主张，代表着&ldquo;自信、个性、传统、高贵、典雅、禀承琥珀传统经典内涵、创新丰富琥珀语言&rdquo;。其&ldquo;信义信仁，修业修世&rdquo;的理念已嵌入每一件精湛的琥珀作品之中，让每一位拥有者体验雅致的品质，典雅生活。以&ldquo;弘扬东方经典&rdquo;为核心，在创新设计上紧跟国际潮流，将中国源远流长的琥珀文化与现代工艺至臻融合，赋予产品深邃的工艺技术、造型艺术、美学思想和文化内涵，赢得各地时尚界的广泛认同与喜爱。</p>\r\n\r\n<p>&nbsp; &nbsp; 创新是衍峰琥珀发展的核心动力，拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。</p>\r\n\r\n<p>&nbsp; &nbsp; 品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。</p>\r\n\r\n<p>&nbsp;</p>\r\n','<head><title data-cke-title=\"所见即所得编辑器, editor3\">所见即所得编辑器, editor3</title><style data-cke-temp=\"1\">html{cursor:text;*cursor:auto}\r\nimg,input,textarea{cursor:default}</style><link type=\"text/css\" rel=\"stylesheet\" href=\"http://127.0.0.1:8000/static/ckeditor/contents.css?t=E3OD\"><style data-cke-temp=\"1\">.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}\r\n.cke_contents_ltr a.cke_anchor,.cke_contents_ltr a.cke_anchor_empty,.cke_editable.cke_contents_ltr a[name],.cke_editable.cke_contents_ltr a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;padding-left:18px;cursor:auto;}.cke_contents_ltr img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}.cke_contents_rtl a.cke_anchor,.cke_contents_rtl a.cke_anchor_empty,.cke_editable.cke_contents_rtl a[name],.cke_editable.cke_contents_rtl a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;padding-right:18px;cursor:auto;}.cke_contents_rtl img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}\r\n.cke_show_borders  table.cke_show_border,.cke_show_borders  table.cke_show_border > tr > td, .cke_show_borders  table.cke_show_border > tr > th,.cke_show_borders  table.cke_show_border > tbody > tr > td, .cke_show_borders  table.cke_show_border > tbody > tr > th,.cke_show_borders  table.cke_show_border > thead > tr > td, .cke_show_borders  table.cke_show_border > thead > tr > th,.cke_show_borders  table.cke_show_border > tfoot > tr > td, .cke_show_borders  table.cke_show_border > tfoot > tr > th{border : #d3d3d3 1px dotted}</style></head><body contenteditable=\"true\" class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\" spellcheck=\"false\"><p><strong>东方经典琥珀第一品牌<br></strong></p><p>    衍峰琥珀提倡趋于完美的生活方式，做每个追求完美生活的人都能拥有的精品琥珀。<br></p><p>    她渲染着充满爱且优雅生活主张，代表着“自信、个性、传统、高贵、典雅、禀承琥珀传统经典内涵、创新丰富琥珀语言”。其“信义信仁，修业修世”的理念已嵌入每一件精湛的琥珀作品之中，让每一位拥有者体验雅致的品质，典雅生活。以“弘扬东方经典”为核心，在创新设计上紧跟国际潮流，将中国源远流长的琥珀文化与现代工艺至臻融合，赋予产品深邃的工艺技术、造型艺术、美学思想和文化内涵，赢得各地时尚界的广泛认同与喜爱。<br></p><p>    创新是衍峰琥珀发展的核心动力，拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。<br></p><p>    品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。<br></p><p></p></body>'),(4,'品牌服务','<p>&nbsp; &nbsp; 拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。</p>\r\n\r\n<p>&nbsp; &nbsp; 品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。</p>\r\n\r\n<p>&nbsp; &nbsp; 为了方便外地经销商来京选购洽谈，我公司特提供接机包食宿服务。欢迎大家前来。</p>\r\n','<head><title data-cke-title=\"所见即所得编辑器, editor1BSE\">所见即所得编辑器, editor1BSE</title><style data-cke-temp=\"1\">html{cursor:text;*cursor:auto}\r\nimg,input,textarea{cursor:default}</style><link type=\"text/css\" rel=\"stylesheet\" href=\"http://127.0.0.1:8000/static/ckeditor/contents.css?t=E3OD\"><style data-cke-temp=\"1\">.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}\r\n.cke_contents_ltr a.cke_anchor,.cke_contents_ltr a.cke_anchor_empty,.cke_editable.cke_contents_ltr a[name],.cke_editable.cke_contents_ltr a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;padding-left:18px;cursor:auto;}.cke_contents_ltr img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}.cke_contents_rtl a.cke_anchor,.cke_contents_rtl a.cke_anchor_empty,.cke_editable.cke_contents_rtl a[name],.cke_editable.cke_contents_rtl a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;padding-right:18px;cursor:auto;}.cke_contents_rtl img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}\r\n.cke_show_borders  table.cke_show_border,.cke_show_borders  table.cke_show_border > tr > td, .cke_show_borders  table.cke_show_border > tr > th,.cke_show_borders  table.cke_show_border > tbody > tr > td, .cke_show_borders  table.cke_show_border > tbody > tr > th,.cke_show_borders  table.cke_show_border > thead > tr > td, .cke_show_borders  table.cke_show_border > thead > tr > th,.cke_show_borders  table.cke_show_border > tfoot > tr > td, .cke_show_borders  table.cke_show_border > tfoot > tr > th{border : #d3d3d3 1px dotted}</style></head><body contenteditable=\"true\" class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\" spellcheck=\"false\"><p>    拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。</p><p>    品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。</p><p>    为了方便外地经销商来京选购洽谈，我公司特提供接机包食宿服务。欢迎大家前来。</p></body>');

#
# Structure for table "main_event"
#

DROP TABLE IF EXISTS `main_event`;
CREATE TABLE `main_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `introduction` varchar(1000) NOT NULL,
  `detail` varchar(10000) NOT NULL DEFAULT '',
  `detailHTML` varchar(10000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

#
# Data for table "main_event"
#

INSERT INTO `main_event` VALUES (1,'第四届北京国际珠宝首饰展','北京衍峰文化有限公司将于2014年4月13日，参加第四节北京国际珠宝首饰展览会，公司参展的产品主要以琥珀蜜蜡为主，为广大经销商和消费者提供更多更全的产品展示和选择。\r\n展会举办地点是中国国际展览中心（老国展），从4月13日到4月16日，为期4天。期待公司在展会中有一个完美的展现。','啦啦啦',''),(2,'2014第17届济南国际珠宝展暨首届济南电视台高端生活展览会','时间：2014年6月20日—23日<br>地点：济南舜耕国际会展中心（市中区舜耕路28号）<br>主办单位： 济南电视台；山东省珠宝玉石首饰行业协会；上海宝玉石行业协会；济南市贸促会\r\n<br>承办单位：济南海名纵横会展服务有限公司<br>协办单位：亚洲珠宝联合会；深圳市黄金珠宝首饰行业协会；中华全国工商业联合会金银珠宝业商会；国家黄金钻石制品质量监督检验中心','哈哈哈','');

#
# Structure for table "main_hall"
#

DROP TABLE IF EXISTS `main_hall`;
CREATE TABLE `main_hall` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `introduction` varchar(1000) NOT NULL,
  `address` varchar(200) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `detail` varchar(10000) NOT NULL DEFAULT '',
  `detailHTML` varchar(10000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

#
# Data for table "main_hall"
#

INSERT INTO `main_hall` VALUES (1,'琥珀活动1','2014-03-11','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','1啦啦啦','1啦啦啦'),(2,'琥珀活动2','2014-03-12','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','2啦啦啦',''),(3,'琥珀活动3','2014-03-13','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','3啦啦啦',''),(4,'琥珀活动4','2014-03-14','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','4啦啦啦',''),(5,'琥珀活动5','2014-03-15','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','5啦啦啦',''),(6,'琥珀活动6','2014-03-16','在过去的这个周末，格但斯克琥珀展在波兰港口城市格但斯克隆重举行了，本版波兰特派员亲身前往并发回相关图片报道。','北京市东城区法华寺街91号天坛古玩城2号馆','010-52999181','<p>&nbsp; &nbsp; 拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。</p>\r\n\r\n<p>&nbsp; &nbsp; 品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。</p>\r\n\r\n<p>&nbsp; &nbsp; 为了方便外地经销商来京选购洽谈，我公司特提供接机包食宿服务。欢迎大家前来。</p>\r\n','<head><title data-cke-title=\"所见即所得编辑器, editor3\">所见即所得编辑器, editor3</title><style data-cke-temp=\"1\">html{cursor:text;*cursor:auto}\r\nimg,input,textarea{cursor:default}</style><link type=\"text/css\" rel=\"stylesheet\" href=\"http://127.0.0.1:8000/static/ckeditor/contents.css?t=E3OD\"><style data-cke-temp=\"1\">.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}\r\n.cke_contents_ltr a.cke_anchor,.cke_contents_ltr a.cke_anchor_empty,.cke_editable.cke_contents_ltr a[name],.cke_editable.cke_contents_ltr a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;padding-left:18px;cursor:auto;}.cke_contents_ltr img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat left center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}.cke_contents_rtl a.cke_anchor,.cke_contents_rtl a.cke_anchor_empty,.cke_editable.cke_contents_rtl a[name],.cke_editable.cke_contents_rtl a[data-cke-saved-name]{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;padding-right:18px;cursor:auto;}.cke_contents_rtl img.cke_anchor{background:url(http://127.0.0.1:8000/static/ckeditor/plugins/link/images/anchor.png?t=E3OD) no-repeat right center;border:1px dotted #00f;background-size:16px;width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}\r\n.cke_show_borders  table.cke_show_border,.cke_show_borders  table.cke_show_border > tr > td, .cke_show_borders  table.cke_show_border > tr > th,.cke_show_borders  table.cke_show_border > tbody > tr > td, .cke_show_borders  table.cke_show_border > tbody > tr > th,.cke_show_borders  table.cke_show_border > thead > tr > td, .cke_show_borders  table.cke_show_border > thead > tr > th,.cke_show_borders  table.cke_show_border > tfoot > tr > td, .cke_show_borders  table.cke_show_border > tfoot > tr > th{border : #d3d3d3 1px dotted}</style></head><body contenteditable=\"true\" class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\" spellcheck=\"false\"><p><strong></strong>    拥有一支近50人的充满活力与创意的研发设计团队，并与清华大学美术学院一起进行产品创新开发，在30000万平米的总部生产大楼，每天可诞生20余系列产品。每年近万款原创产品上市，衍峰琥珀产品种类现已全面覆盖到金珀、血珀、花珀、蓝珀、新蜜、老蜜、白蜜、金绞蜜、双色等。并有高级定制系列精品。<br></p><p>    品质是衍峰琥珀永恒发展的基石，衍峰琥珀从研发、设计到生产，全资自属工厂全程一体化运作。保证产品最终的质量出口。<br></p><p>    为了方便外地经销商来京选购洽谈，我公司特提供接机包食宿服务。欢迎大家前来。<br></p></body>');

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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

#
# Data for table "main_product"
#

INSERT INTO `main_product` VALUES (1,'云芝','蜜蜡灵芝小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(2,'天禄','蜜蜡貔貅小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(3,'珠玉满堂','蜜蜡摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(4,'风仪','蜜蜡牡丹花小摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(5,'鹤鹤有鸣','蜜蜡摆件·波罗的海','蜜蜡','雕刻','摆件','波罗的海'),(6,'凤赫于鸣','金蓝百鸟朝凤摆件·缅甸','蓝珀','雕刻','摆件','缅甸'),(7,'一笑千年','蓝绿布袋佛摆件·墨西哥','蓝珀','雕刻','摆件','墨西哥'),(8,'鱼跃','蓝珀雕刻件·多米尼加','蓝珀','雕刻','雕刻件','多米尼加'),(9,'长生','蓝珀雕刻件·多米尼加','蓝珀','雕刻','雕刻件','多米尼加'),(10,'蓝姬','蓝绿雕刻件·缅甸','蓝珀','雕刻','雕刻件','缅甸'),(11,'子幼','蓝绿雕刻件·缅甸','蓝珀','雕刻','雕刻件','缅甸'),(12,'武财神','蜜蜡关公手把件·波罗的海','蜜蜡','雕刻','手把件','波罗的海'),(13,'众生','蜜蜡笑佛手把件·波罗的海','蜜蜡','雕刻','手把件','波罗的海'),(14,'千年','老蜜108佛珠·波罗的海','老蜜108佛珠','饰品','编织特色','波罗的海'),(15,'垂衣','老蜜鼓珠·波罗的海','老蜜鼓珠','饰品','编织特色','波罗的海'),(16,'夜华','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(17,'寸光','老蜜桶珠·波罗的海','老蜜蜡','饰品','编织特色','波罗的海'),(18,'拈花','双色108佛珠·波罗的海','双色108佛珠','饰品','编织特色','波罗的海'),(19,'明堂','老蜜手串·波罗的海','老蜜蜡','饰品','编织特色','波罗的海'),(20,'星耀','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(21,'玛尼','老蜜蜡手串·波罗的海','老蜜蜡','饰品','编织特色','波罗的海'),(22,'福运','双色手串·波罗的海','双色','饰品','编织特色','波罗的海'),(23,'红豆','血珀手串·波罗的海','血珀','饰品','编织特色','波罗的海'),(24,'金魄','蜜蜡手串·波罗的海','蜜蜡','饰品','编织特色','波罗的海'),(25,'冥思','观音蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(26,'出兜率天','佛蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(27,'初雨','双鱼蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(28,'沁甜','南瓜金包蜜吊坠-波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(29,'沉鱼','蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(30,'甘瓠蜜','葫芦金绞蜜吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(31,'蝶恋','蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(32,'迷醉','玫瑰花蜜蜡吊坠·波罗的海','蜜蜡','饰品','吊坠','波罗的海'),(33,'鱼生','白蜜蜡吊坠·波罗的海','白蜜蜡','饰品','吊坠','波罗的海'),(34,'钟情','蓝珀吊坠·多米尼加','蓝珀','饰品','吊坠','多米尼加'),(35,'海蓝','金蓝平安扣·缅甸','蓝珀','饰品','吊坠','缅甸'),(36,'喜上梅梢','金蓝吊坠·缅甸','蓝珀','饰品','吊坠','缅甸'),(37,'为你','蓝珀耳钉·多米尼加','蓝珀','饰品','戒指和耳钉','多米尼加'),(38,'一世','蓝珀戒指·多米尼加','蓝珀','饰品','戒指和耳钉','多米尼加'),(39,'缓缓归','老蜜蜡手镯·波罗的海','老蜜蜡','饰品','手镯','波罗的海'),(40,'陌上花','白蜜蜡手镯·波罗的海','白蜜蜡','饰品','手镯','波罗的海'),(41,'蓝翎','蓝绿手镯·墨西哥','蓝珀','饰品','手镯','墨西哥'),(42,'光炫','金珀108粒佛珠·波罗的海','金珀','珠串','佛珠','波罗的海'),(43,'莲华','老蜜108粒佛珠·波罗的海','老蜜蜡','珠串','佛珠','波罗的海'),(44,'琴易','双色108粒佛珠·波罗的海','双色','珠串','佛珠','波罗的海'),(45,'幻泪','蓝珀108粒佛珠·多米尼加','蓝珀','珠串','佛珠','多米尼加'),(46,'思韵','老蜜蜡鸡油黄桶珠·波罗的海','老蜜蜡','珠串','手串','波罗的海'),(47,'神现','白花手串·波罗的海','白花','珠串','手串','波罗的海'),(48,'重灵','老蜜蜡手串·波罗的海','老蜜蜡','珠串','手串','波罗的海'),(49,'阑珊','血珀手串·波罗的海','血珀','珠串','手串','波罗的海'),(50,'池眠','蓝珀手串·多米尼加','蓝珀','珠串','手串','多米尼加');
