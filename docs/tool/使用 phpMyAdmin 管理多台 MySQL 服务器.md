---

title: 使用 phpMyAdmin 管理多台 MySQL 服务器

meta:
  - name: description
    content: 使用 phpMyAdmin 管理多台 MySQL 服务器
  - name: keywords
    content: 使用 phpMyAdmin 管理多台 MySQL 服务器

created: 2020/04/04

updated: 2020/04/13

tags:
  - Mysql

---

# 使用 phpMyAdmin 管理多台 MySQL 服务器

> 默认安装的 `phpMyAdmin`，通常只能连接一台 `MySQL` 服务器，其配置信息是保存在 `phpMyAdmin` 的配置文件里的，当我们需要在多台服务器之间进行切换登陆的时候，修改起来非常麻烦。遵照下面的配置方法，我们可以方便的使用 `phpMyAdmin` 连接多台 `MySQL` 。

## 方法一：

> 登陆 `phpMyAdmin` 时输入服务器 `ip` 地址、用户名、密码

#### 缺点：
登陆操作比较繁琐，而且切换服务器时须先退出当前所登陆的服务器。

#### 步骤：
1. 复制 `phpMyAdmin` 根目录下的 `config.sample.inc.php` 文件，重命名为 `config.inc.php`；
2. 将 `$cfg['AllowArbitraryServer']` 的默认值 `false` 修改为 `true` 即可实现管理多台 `MySQL` 服务器;
```  php
/**
 * allow login to any user entered server in cookie based authentication
 *
 * @global boolean $cfg[‘AllowArbitraryServer’]
 */
$cfg['AllowArbitraryServer'] = true;
```

## 方法二（推荐）：
> 登陆 `phpMyAdmin` 时只需输入用户名、密码，服务器地址为下拉列表可选，登陆后也可选择其他服务器快速切换；  
> 如果安全性要求不高，可以将 `auth_type` 设置为 `config`，不用输入用户名和密码，通过下拉框即可切换 `MySQL` 服务器

#### 优点：
登陆操作简便，登陆后切换服务器无须退出当前连接。

#### 步骤：
1. 复制 `phpMyAdmin` 根目录下的 `config.sample.inc.php` 文件，重命名为 `config.inc.php`；
2. 在文件中定义你的多台服务器配置信息：
``` php
$hosts = [
    1 => ['host' => 'localhost', 'user' => 'root', 'password' => 'root'],
    2 => ['host' => '192.168.10.10', 'user' => 'homestead', 'password' => 'secret']
];
```
3. 在加入以下代码片段，通过 `for` 循环来读取多台 `MySQL` 服务器配置信息
``` php
for($i = 1; $i <= count($hosts); $i++){
    /* Authentication type */
    $cfg['Servers'][$i]['auth_type'] = 'cookie';
    /* Server parameters */
    $cfg['Servers'][$i]['host'] = $hosts[$i]['host'];    //修改host
    $cfg['Servers'][$i]['connect_type'] = 'tcp';
    $cfg['Servers'][$i]['compress'] = false;
    /* Select mysqli if your server has it */
    $cfg['Servers'][$i]['extension'] = 'mysql';
    $cfg['Servers'][$i]['AllowNoPassword'] = true;
    $cfg['Servers'][$i]['user'] = $hosts[$i]['user'];    //修改用户名
    $cfg['Servers'][$i]['password'] = $hosts[$i]['password'];    //密码
}
```
4. 保存文件，重新登陆即可实现管理多台 `MySQL` 服务器。

> 文章转载自：[配置 `phpMyAdmin` 使登录时可填写 `IP` 管理多台 `MySQL`](https://www.oicto.com/phpmyadmin-mysql-ip/)

---
