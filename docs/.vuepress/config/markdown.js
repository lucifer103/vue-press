module.exports = {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        md.use(require('markdown-it-task-checkbox'),{
            disabled: true,
            divWrap: false,
            divClass: 'checkbox',
            idPrefix: 'cbx_',
            ulClass: 'task-list',
            liClass: 'task-list-item'
        })
    },
    lineNumbers: true,
}
