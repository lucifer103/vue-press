module.exports = [
  "serve", // 本地预览打包后的网站
  [
    "@vuepress/medium-zoom",
    {
      // 点击图片放大插件
      selector: "#markdown img",
      options: {
        margin: 5,
      },
    },
  ],
  [
    "@vuepress/google-analytics",
    {
      ga: "G-QBZ529Y587", // UA-00000000-0
    },
  ],
];
