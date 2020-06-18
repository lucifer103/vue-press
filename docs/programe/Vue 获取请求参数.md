---

title: Vue 获取请求参数

meta:
  - name: description
    content: Vue 获取请求参数
  - name: keywords
    content: Vue,URL,Http

created: 2020-06-18

updated: 2020-06-18

tags:
  - Vue
  - URL
  - Http

---
 
## 项目内页面之间跳转

### 跳转

#### Script 脚本

``` js
this.$router.push({ 
  name: 'Index',  // 等价于 path: 'index'
  query: {
    role: params.role 
  } 
});
```

#### Template 模板

``` html
<!-- 等价于 name: 'Detail' -->
<router-link :to="{
  path: '/detail',  
  query: {
    role: params.role
  }
}">
  <div></div>
</router-link>
```

### 接收

``` ts
public created(): void {
  this.role = this.$route.query.role;
}
```

## 外部跳转 Vue 项目

``` ts
const getUrlParam = () => {
  // 获取当前 url
  const u: string = window.location.href;
  // 获取 #/ 之前的字符串
  const r: string = u.split('#')[0];
  // 获取 ? 之后的参数字符串
  const l: string = r.split('?')[1];
  // 参数字符串分割为数组
  const params: string[] = l.split('&');
  const param: any = {};
  // 遍历数组，拿到 json 对象
  for (const item of params) {
    param[item.split('=')[0]] = item.split('=')[1];
  }
  return param;
};

export default {
  getUrlParam,
};

```

> 文章参考于：[`VUE` 项目获取 `url` 中的参数](https://juejin.im/post/5d6e0fb8518825718a773e70)