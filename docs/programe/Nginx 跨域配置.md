---
title: Nginx 跨域配置

meta:
  - name: description
    content: Nginx 跨域配置
  - name: keywords
    content: nginx,api

created: 2021-04-09

updated: 2021-04-09

tags:
  - Nginx
  - Api
---

### \* 通配符 全部允许存在安全问题（不推荐）

一旦启用本方法，表示任何域名皆可直接跨域请求。

### 多域名配置（推荐）

配置多个域名在 `map` 中 只有配置过的允许跨域

```conf
map $http_origin $corsHost {
  default 0;
  "~https://douten.asia" https://douten.asia;
  "~https://cms.douten.asia" https://cms.douten.asia;
}

server {
  location / {
    # 允许 $corsHost 域
    add_header Access-Control-Allow-Origin $corsHost;
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    add_header Access-Control-Allow-Methods 'GET, POST, PUT, PATCH, DELETE, OPTIONS';
    # OPTIONS 直接返回 204
    if ($request_method = 'OPTIONS') {
      return 204;
    }
  }
}
```
