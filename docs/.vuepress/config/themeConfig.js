const links = require('./links.js');
const social = require('./social');
const footer = require('./footer');
const ityped = require('./ityped');
const nameplate = require('./nameplate');

module.exports = {
    lang: 'zh-CN',
    // logo: '/logo48.png',
    author: 'Lucifer',
    authorLink: 'https://github.com/lucifer103/',
    //封面图
    // banner: '/banner.png',
    locales: {
        title: '星汉灿烂',
        description: '书写生活与你'
    },
    navs: [
        {text: '编程技术', link: '/programe/'},
        {text: '生活兴趣', link: '/life/'},
        {text: '软件工具', link: '/tool/'},
        {text: '其他', link: '/other/'}
    ],
    //按钮组
    buttons: [
        {text: '阅读列表', link: '/posts/', type: 'primary'},
        {text: '了解作者', link: '/about.html', type: 'default'}
    ],
    timeline: true,
    links,
    about: true,
    avatar: 'https://cdn.learnku.com/uploads/avatars/25461_1585757311.jpg!/both/400x400',
    //添加社交
    social,
    //页脚
    footer,
    //打字特效
    ityped,
    //标签数量
    tagSize: 100, // 默认：100
    //标示牌
    nameplate,
    //随机封面
    post: {
        // cover: [
        //     '/post/1.jpg',
        //     '/post/2.jpg',
        //     'https://xxx.com/3.jpg',
        //     'https://xxx.com/4.jpg'
        // ],
        //分页
        pageSize: 12,
        pageSizeOptions: ['12', '24', '48', '96'],
        //气泡特效
        bubbles: {
            color: 'random',
            radius: 15,
            density: 0.3,
            clearOffset: 0.2
        }
    },
    //打赏
    reward: [
        'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
        'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png'
    ],
    //落下帷幕
    curtain: {
        tip: '页面准备中...',
        textShadow: '#e91e63'
    },

    //客服聊天
    crisp: 'ee7d1688-7078-46a7-996f-0cb6dc843ff1',

    //添加评论
    discuss: 'valine',
    valine: {
        appId: 'i0HYGMS03yNK2zeHMfbcMFJC-gzGzoHsz',
        appKey: '3SGJ8fQAYvomJeeToq41Ur11',
        placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
        notify: false,
        verify: false,
        avatar: '',
        pageSize: 8,
        recordIP: true,
        lang: 'zh-cn'
    },

    //百度统计
    baiDu: {
        tongJi: 'https://hm.baidu.com/hm.js?tongJi',
        autoPush: true,
        pinYin: true
    },
    //夜间模式
    dark: true,
    password: 'Aa@123321',
    //cdn
    //cdn: 'https://cdn.jsdelivr.net/gh/cnguu/cnguu.github.io@master/'
}
