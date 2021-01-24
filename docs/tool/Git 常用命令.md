---
title: Git 常用命令

meta:
  - name: description
    content: Git 常用命令
  - name: keywords
    content: Git

created: 2020/04/18

updated: 2020/05/31

tags:
  - Git
---

## 常见参数：

1. `-f`、`--force`：强制

2. `-d`、`--delete`：删除

3. `-D`：`--delete --force` 的快捷键

4. `-m`、`--move`：移动或重命名

5. `-M`：`--move --force` 的快捷键

6. `-r`、`--remote`：远程仓库

7. `-a`、`--all` ：所有

## 分支操作

1. 查看本地所有分支：`git branch`；

2. 查看远程所有分支：`git branch -r`；

3. 查看本地和远程所有分支：`git branch -a`；

4. 新建分支：`git checkout -b {branch_name}`

   - `-b` 参数表示是否切换至新分支

5. 删除分支：`git branch -d -r {branch_name}`

   - `-r` 参数表示删除本地分支还是远程分支

6. 删除远程分支：

   - `git branch -d -r origin/{branch_name}`

   - `git push origin :{branch_name}`

7. 重命名分支：`git branch -m {old_branch_name} {new_branch_name}`

8. 重命名远程分支：

   - 删除远程老分支：`git branch -d -r {old_branch_name}`；

   - `push` 本地新分支到远程：`git push origin {new_branch_name}:{new_branch_name}`；

9. 检出某个 `comment` 作为新分支：`git checkout {comment_id} -b {branch_name}`

## 小贴士

1.  查询用户名和邮箱：

    - `$ git config user.name`

    - `$ git config user.email`

2.  编辑用户名和邮箱：

    - `$ git config --global user.name "{name}"`

    - `$ git config --global user.email "{email}"`

3.  取消换行符自动转换：`git config --global core.autocrlf false`；

4.  修改最后一次注释：`git commit --amend`；

5.  已经在版本库里的文件无法直接通过 `ignore` 排除，需要先执行：

    - `git rm --cached {file_path}`

    - `git update-index --assume-unchanged {file_path}`

6.  修改远程仓库地址：

    - 使用修改命令：`git remote set-url origin {url}`

    - 先删除后新增：

          	* `git remote rm origin`

          	* `git remote add origin {url}`

    - 修改 `config` 文件

7.  生成 `.git-credential` 记录用户名密码，之后操作便不用输入账号密码：`git config --global credential.helper store`；

8.  丢弃本地所有没有 `commit` 的修改：`git checkout .`；

9.  把所有没有提交的修改暂存：`git stash`，可用 `git stash pop` 恢复；

10. 返回到某个版本，不保留修改：`git reset --hard {commit_id}`；

11. 返回到某个版本，保留修改：`git reset --soft {commit_id}`；

12. 查看提交日志：`git log`；

---
