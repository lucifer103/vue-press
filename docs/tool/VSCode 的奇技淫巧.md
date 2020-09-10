---

title: VSCode 的奇技淫巧

meta:
  - name: description
    content: VSCode 的奇技淫巧
  - name: keywords
    content: VSCode,DevTool

created: 2020-09-10

updated: 2020-09-10

tags:
  - VSCode
  - DevTool

---

## 根据 ESLint 规则在保存文件时自动修复错误

在根目录下的 `.vscode` 目录中的 `settings.json` 文件中键入以下键值对：

``` json
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

---