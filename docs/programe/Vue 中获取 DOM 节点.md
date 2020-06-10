---

title: Vue 中获取 DOM 节点

meta:
  - name: description
    content: Vue 中获取 DOM 节点
  - name: keywords
    content: Vue,DOM

created: 2020-06-10

updated: 2020-06-10

tags:
  - Vue
  - DOM

---

## 前言

在 `Vue` 中，只能在 `mounted` 及其之后的钩子函数中进行 `DOM` 操作，因为 `mounted` 时才完成 `DOM` 挂载

## 选择器获取

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

## `ref` 获取

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