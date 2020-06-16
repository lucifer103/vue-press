---

title: Git Commit Emoji 提交指南

meta:
  - name: description
    content: Git Commit Emoji 提交指南
  - name: keywords
    content: Git,Emoji

created: 2020-06-02

updated: 2020-06-16

tags:
  - Git
  - Emoji

---

## 前言

执行 `git commit` 时，使用 `Emoji`，可凸显提交信息，易于区分和查找提交历史

## Commit 格式

提交信息遵从以下格式

```
:emoji:<type>(<scope>): <subject> 不超过 100 个字的摘要，首字母小写，使用祈使语气，句末不加标点
```

## 常用 Emoji

| Emoji | 代码 | 说明 | 英文说明 |
| :-: | :-: | :-: | :-: |
| 🎉 (庆祝) | `:tada:` | 初始化提交 | Initial commit |
| ✨ (火花) | `:sparkles:` | 添加新特性 | Introducing new features |
| 🔖 (书签) | `:bookmark:` | 发行 / 版本标签 | Releasing / Version tags |
| 🐛 (bug) | `:bug:` | 修复 bug | Fixing a bug |
| 🚑 (急救车) | `:ambulance:` | 核心代码修复 | Critical hotfix |
| 🌐 (地球) | `:globe_with_meridians:` | 国际化与本地化 | Internationalization and localization |
| 💄 (口红) | `:lipstick:` | 更新界面和样式文件 | Adding or updating the UI and style files |
| 🎬 (场记板) | `:clapper:` | 更新演示 / 示例 | Update demo / example |
| 🚨 (警车灯) | `:rotating_light:` | 移除警告信息 | Removing linter warnings |
| 🔧 (扳手) | `:wrench:` | 修改配置文件 | Changing configuration files |
| ➕ (加号) | `:heavy_plus_sign:` | 添加依赖 | Adding a dependency |
| ➖ (减号) | `:heavy_minus_sign:` | 移除依赖 | Removing a dependency |
| ⬆️ (上升箭头) | `:arrow_up:` | 升级依赖 | Upgrading dependencies |
| ⬇️ (下降箭头) | `:arrow_down:` | 依赖降级 | Downgrading dependencies |
| ⚡️ (闪电)<br/>🐎 (赛马) | `:zap:`<br/>`:racehorse:` | 提升性能 | Improving performance |
| 📈 (上升趋势图) | `:chart_with_upwards_trend:` | 添加代码跟踪分析 | Adding or updating analytics or tracking code |
| 🚀 (火箭) | `:rocket:` | 部署程序 | Deploying stuff |
| ✅ (白色复选框) | `:white_check_mark:` | 添加测试代码 | Adding or updating tests |
| 📝 (备忘录) | `:memo:` | 撰写文档 | Writing docs |
| 🔨 (锤子) | `:hammer:` | 重大重构 | Major refactoring |
| 🎨 (调色板) | `:art:` | 改进代码结构 / 代码格式 | Improving structure / format of the code |
| 🔥 (火焰) | `:fire:` | 移除代码或文件 | Removing code or files |
| ✏️ (铅笔) | `:pencil2:` | 修复拼写错误 | Fixing typos |
| 🚧 (施工) | `:construction:` | 正在进行中 | Work in progress |
| 👷 (工人) | `:construction_worker:` | 添加 CI 构建到系统 | Adding or updating CI build system |
| 💚 (绿心) | `:green_heart:` | 修复 CI 构建 | Fixing CI Build |
| 🔒 (锁) | `:lock:` | 修复安全问题 | Fixing security issues |
| 🐳 (鲸鱼) | `:whale:` | Docker 相关工作 | Work about Docker |
| 🍎 (苹果) | `:apple:` | 修复 macOS 下的问题 | Fixing something on macOS |
| 🐧 (企鹅) | `:penguin:` | 修复 Linux 下的问题 | Fixing something on Linux |
| 🏁 (旗帜) | `:checked_flag:` | 修复 Windows 下的问题 | Fixing something on Windows |
| 🤖 (机器人) | `:robot:` | 修复 Android 平台的问题 | Fixing something on Android |
| 🍏 (青苹果) | `:green_apple:` | 修复 iOS 平台的问题 | Fixing something on iOS |
| 💩 (一坨) | `:hankey:` | 改进垃圾代码 | Writing bad code that needs to be improved |
| ⏪ (倒带) | `:rewind:` | 恢复修改 | Reverting changes |
| 🔀 (上下扭曲) | `:twisted_rightwards_arrows:` | 合并分支 | Merging branches |
| 📦 (包) | `:package:` | 更新已编译的文件或包 | Adding or updating compiled files or packages |
| 👽 (外星人) | `:alien:` | 由于外部 API 更改而更新代码 | Updating code due to external API changes |
| 🚚 (卡车) | `:truck:` | 移动或重命名文件 | Moving or renaming files |
| 📄 (页面) | `:page_facing_up:` | 添加或更新许可证 | Adding or updating license |
| 💥 (爆炸) | `:boom:` | 引入重大变化 | Introducing breaking changes |
| 🍱 (便当) | `:bento:` | 增加或更新资源文件 | Adding or updating assets |
| 👌 (OK 手势) | `:ok_hand:` | 更新代码，因为代码审核变更 | Updating code due to code review changes. |
| ♿️ (轮椅) | `:wheelchair:` | 提高可访问性 | Improving accessibility |
| 💡 (灯泡) | `:bulb:` | 添加源码注释 | Adding or updating comments in source code |
| 🍻 (啤酒) | `:beers:` | 醉酒写代码 | Writing code drunkenly |
| 💬 (语音气泡) | `:speech_balloon:` | 更新文本和字面量 | Adding or updating text and literals |
| 🗃 (文件盒) | `:card_file_box:` | 执行数据库相关的变化 | Performing database related changes |
| 🔊 (喇叭) | `:loud_sound:` | 添加日志记录 | Adding or updating logs |
| 🔇 (静音) | `:mute:` | 删除日志记录 | Removing logs |
| 👥 (合作) | `:busts_in_silhouette:` | 添加贡献者 | Adding or updating contributor(s) |
| 🚸 (儿童过马路) | `:children_crossing:` | 提高用户体验 / 可用性 | Improving user experience / usability |
| 🏗 (建筑施工) | `:building_construction:` | 架构调整 | Making architectural changes |
| 📱 (苹果手机) | `:iphone:` | 响应式设计 | Working on responsive design |
| 🤡 (小丑脸) | `:clown_face:` | 模拟数据 | Mocking things |
| 🥚 (蛋) | `:egg:` | 添加一个彩蛋 | Adding or updating an easter egg |
| 🙈 (看不到) | `:see_no_evil:` | 添加或更新 .gitignore 文件 | Adding or updating a .gitignore file |
| 📸 (相机闪光灯) | `:camera_flash:` | 添加或更新快照 | Adding or updating snapshots |
| 📌 (图钉) | `:pushpin:` | 将依赖项固定到特定版本 | Pinning dependencies to specific versions |
| ♻️ (回收) | `:recycle:` | 重构代码 | Refactoring code |
| ⚗ (相互反应) | `:alembic:` | 尝试新事物 | Experimenting new things |
| 🔍 (过滤) | `:mag:` | 改善SEO | Improving SEO |
| ☸️ (佛法之轮) | `:wheel_of_dharma:` | 关于 Kubernetes 的工作 | Work about Kubernetes |
| 🏷️ (标签) | `:label:` | 添加或更新类型 | Adding or updating types (Flow, TypeScript) |
| 🌱 (幼苗) | `:seedling:` | 添加或更新数据填充文件 | Adding or updating seed files |
| 🚩 (三角旗) | `:triangular_flag_on_post:` | 添加，更新或删除功能标志 | Adding, updating, or removing feature flags |
| 🥅 (目标网) | `:goal_net:` | 捕获异常 | Catching errors |
| 💫 (眩晕) | `:dizzy:` | 添加或更新动画和过渡 | Adding or updating animations and transitions |
| 🗑 (废纸篓) | `:wastebasket:` | 弃用需要清除的代码 | Deprecating code that needs to be cleaned up |

> 本文参考于以下文章：[Git commit emoji 食用指南](https://blog.cnguu.cn/program/git-commit-emoji-shi-yong-zhi-nan.html)，[gitmoji 源仓库](https://github.com/carloscuesta/gitmoji)，[gitmoji 汉化仓库](https://github.com/biezhi/gitmoji)