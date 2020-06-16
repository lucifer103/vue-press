---

title: Vue 动态引入资源

meta:
  - name: description
    content: Vue 如何动态引入资源
  - name: keywords
    content: Vue,Javascript,CSS

created: 2020-06-16

updated: 2020-06-16

tags:
  - Vue
  - Javascript
  - CSS

---

## 定义

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

## 使用

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
 
