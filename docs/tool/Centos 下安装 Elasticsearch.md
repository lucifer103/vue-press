---
title: Centos 下安装 Elasticsearch

meta:
  - name: description
    content: Centos 下安装 Elasticsearch
  - name: keywords
    content: Centos,Elasticsearch

created: 2020/04/18

updated: 2020/05/31

tags:
  - Linux
  - Centos
  - Elasticsearch
---

## 准备

因为 `Elasticsearch` 是基于 `Java` 开发的，所以安装之前需要确保 `Java` 环境运行正常

## 安装

1. 导入 `Elasticsearch PGP` 密钥：`rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch`；

2. 配置 `Elasticsearch` 源信息：

   - `vim /etc/yum.repos.d/elasticsearch.repo`

   - 写入以下代码片段：

```
[elasticsearch]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=0
autorefresh=1
type=rpm-md
```

3. 安装 `Elasticsearch`：`sudo yum install --enablerepo=elasticsearch elasticsearch`；

## 插件

1. 查看已安装的插件列表：`sudo /usr/share/elasticsearch/bin/elasticsearch-plugin list`；

2. 安装 `IK Analysis`「中文分词」插件：`/usr/share/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v{elasticsearch_version}/elasticsearch-analysis-ik-{elasticsearch_version}.zip`

## 常用命令

1. 启动：`systemctl start elasticsearch.service`；

2. 停止：`systemctl stop elasticsearch.service`；

3. 校验服务是否正常运行并且输出基础信息：`curl 127.0.0.1:9200`：
   - 其中 `version.number` 为版本号，安装插件时插件的版本号尽可能与 `Elasticsearch` 的版本号保持相同

```json {6}
{
  "name": "Cp8oag6",
  "cluster_name": "elasticsearch",
  "cluster_uuid": "AT69_T_DTp-1qgIJlatQqA",
  "version": {
    "number": "7.6.2",
    "build_flavor": "default",
    "build_type": "tar",
    "build_hash": "f27399d",
    "build_date": "2016-03-30T09:51:41.449Z",
    "build_snapshot": false,
    "lucene_version": "8.4.0",
    "minimum_wire_compatibility_version": "1.2.3",
    "minimum_index_compatibility_version": "1.2.3"
  },
  "tagline": "You Know, for Search"
}
```

## 小贴士

1. 配置文件路径：`/etc/elasticsearch/jvm.options`；

---
