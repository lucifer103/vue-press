---

title: Postman 请求 Laravel 接口总是重定向到根路由

meta:
  - name: description
    content: Postman 请求 Laravel 接口总是重定向到根路由
  - name: keywords
    content: Postman，Laravel，Api

created: 2020-04-04

updated: 2020-04-04

tags:
  - Laravel
  - Postman
  - Api

---

# Postman 请求 Laravel 接口总是重定向到根路由

### 解决方案
在 `header` 中增加：`Accept`: `application/json` 即可解决

---
