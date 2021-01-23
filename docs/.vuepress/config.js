const head = require("./config/head");
const themeConfig = require("./config/themeConfig");
const plugins = require("./config/plugins");
const markdown = require("./config/markdown");

module.exports = {
  base: "/", // 部署站点的基础路径
  evergreen: true,
  theme: "yur",
  head,
  themeConfig,
  plugins,
  markdown,
  host: "localhost", // 开发模式下，访问域名
  port: 8080, // 开发模式下，访问端口
};
