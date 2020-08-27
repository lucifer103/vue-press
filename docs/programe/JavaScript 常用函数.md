---

title: JavaScript 常用函数

meta:
  - name: description
    content: JavaScript 常用函数
  - name: keywords
    content: Javascript,Function

created: 2020-08-27

updated: 2020-08-27

tags:
  - Javascript
  - Function

---

## 两个数组是否完全相同

``` js
arrayEquals (array1, array2) {
  if (!(array1 || array2)) {
    return false
  }
  // 先比较长度
  if (array1.length !== array2.length) {
    return false
  }
  for (var i = 0, l = array1.length; i < l; i++) {
    // 检查是否为内嵌数组
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // 递归比较数组
      if (!arrayEquals(array1[i], array2[i])) {
          return false
      }
    // 标量比较
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}
```

---