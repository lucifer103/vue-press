---

title: vue 的奇技淫巧

meta:
  - name: description
    content: vue 的奇技淫巧
  - name: keywords
    content: Vue,Javascript

created: 2020-06-29

updated: 2020-06-29

tags:
  - Vue
  - Javascript

---

## 全局引入 Less 变量
 
1. 定义一个 `variable.less`，将你想用的全局变量写入其中

``` less
@primary-color: #9a69ec;
@link-color: #9a69ec;
@tip-color: #3c67bd;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
```

2. 安装 `style-resources-loader` 加载器：`vue add style-resources-loader`，预处理器选择 `Less`

3. 将 `variable.less` 配置到加载器在 `vue.config.js` 中生成的代码片段中

``` js
const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, '{variable_file_path}/variable.less')]
    }
  }
}
```

---

## 内联样式 style、class 三元表达式

1. `style` 三元表达式：`<p :style="{'color': (check == true ? '#fff': '#333')}">{{ price }}</p>`

2. `class` 三元表达式：`<i class="iconfont " :class="[type == 'password' ? 'icon-bukejian': 'icon-kejian']"></i>`

---

## 动态引入资源

1. 定义一个 `util` 函数

``` js
const LoadRes = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject(new Error('第三方类库加载失败'))
    }
    script.src = src
    document.getElementsByTagName('body')[0].appendChild(script)
  })
}

export default {
    LoadRes
}
```

2. 使用

``` js
<script>
  import util from '@/utils/util'
  export default {
    name: 'Util',
    mounted () {
      util.LoadRes('https://foo.bar/demo.js').then(() => {
        // TODO
      })
    }
  }
</script>
```

---

## 获取 DOM 节点

1. 在 `Vue` 中，只能在 `mounted` 及其之后的钩子函数中进行 `DOM` 操作，因为 `mounted` 时才完成 `DOM` 挂载

2. 选择器获取

``` vue
<template>
  <div>
    <canvas id="cvs">
  </div>
</template>
<script>
  export default {
    mounted () {
      let canvas = document.querySelector('#cvs')
    }
  }
</script>
```

3. `ref` 获取

``` vue
<template>
  <div>
    <canvas ref="cvs">
  </div>
</template>
<script>
  export default {
    mounted () {
      let canvas = this.$refs.cvs
    }
  }
</script>
```

---

## 获取请求参数

1. 项目内页面之间跳转

    * 跳转

        * `Script` 脚本
        
        ``` js
        this.$router.push({ 
          name: 'Index',  // 等价于 path: 'index'
          query: {
            role: params.role 
          } 
        });
        ```

        * `Template` 模板

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

    * 接收

    ``` ts
    public created(): void {
      this.role = this.$route.query.role;
    }
    ```

2. 外部跳转 `Vue` 项目

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

---