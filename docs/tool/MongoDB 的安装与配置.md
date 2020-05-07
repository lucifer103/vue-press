---

title: MongoDB 的安装与配置

meta:
  - name: description
    content: MongoDB 的安装与配置
  - name: keywords
    content: MongoDB

created: 2020-05-04

updated: 2020-05-04

tags:
  - Database
  - MongoDB

---

# MongoDB 的安装与配置

## 下载

前往 [Download Center: Enterprise Server | MongoDB](https://www.mongodb.com/download-center/enterprise)，根据自己的软件版本使用习惯和系统下载相应的安装包；

## Windows

### 安装

1. `Setup Type` 选择 `Custom`；
2. 安装过程中取消 `Install MongoDB Compass` （图形管理工具）勾选。

### 配置

1. 在安装目录下的 `log` 目录下新建 `mongo.log` 文件；
2. 在安装目录下新建 `mongo.conf` 文件，并写入以下内容：
``` conf
# 数据库路径
dbpath={MongoDB_Path}\data
# 日志输出文件路径
logpath={MongoDB_Path}\log\mongo.log
# 错误日志采用追加模式
logappend=true
# 启用日志文件，默认启用
journal=true
# 这个选项可以过滤掉一些无用的日志信息，若需要调试请设置为 false
quiet=true
# 端口号默认为 27017
port=27017
```
3. 启动 `MongoDB`：`cd bin && mongod --config "{MongoDB_Path}\mongo.conf"`；
4. 校验服务是否正常启动，打开浏览器输入 `127.0.0.1:27017`，可以访问成功且输出信息合理的话，即为启动成功；
5. 将 `MongoDB` 安装为服务来管理：`cd bin && mongod --config "{MongoDB_Path}\mongo.conf"  --install --serviceName "{Service_Name}"`。

### 命令

* 启动服务：`net start {Service_Name}`；
* 关闭服务：`net stop {Service_Name}`；
* 移除服务：`mongod --remove --serviceName "{Service_Name}"`。

## Linux

有待补充 ...

---
