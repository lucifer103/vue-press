const markdown = require('./config/markdown')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')

module.exports = {
    theme: 'yur',
    evergreen: true,
    head,
    plugins,
    themeConfig,
    markdown,
};
