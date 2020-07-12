---

title: Git 远程分支与本地分支

meta:
  - name: description
    content: Git 远程分支与本地分支
  - name: keywords
    content: Git

created: 2020-06-21

updated: 2020-07-12

tags:
  - Git

---

## 场景

有时候开发需要新开一个 `Git` 分支，这样可以有效的进行并行开发

新开分支有两种方式：

* 在远程仓库新开分支，本地仓库执行检出
* 在本地仓库新开分支，推送到远程仓库

## 远程仓库新开分支

``` bash
// 检出远程的 `branch_name` 分支到本地
git checkout -b <branch_name> origin/<branch_name>
```

## 本地仓库新开分支

``` bash
// 创建并切换到分支 `branch_name`
git checkout -b <branch_name>
// 推送本地的 `local_branch_name` 分支到远程 `origin` 的 `remote_branch_name` 分支
git push origin <local_branch_name>:<remote_branch_name>
```