//默认主题集成的模块
import {
  defaultTheme
} from '@vuepress/theme-default'
import {
  searchPlugin
} from '@vuepress/plugin-search'
export default {
  base: '/actionUse/',
  //port: 9090,
  //dest: './dist',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档',
      description: 'Vue 驱动的文档',
      head: [['link', { rel: 'icon', href: '/actionUse/logo.png' }]]
    },
    '/en/': {
      lang: 'en-US',
      title: 'Document',
      description: 'Vue-powered Document',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    home: '/',
    logo: '/logo.png',
    colorMode: 'auto',
    colorModeSwitch: true,
    //gitub
    repo: 'learnemt/actionUse',
    //repoLabel: '查看源码',
    //是否启用 编辑此页 链接。
    editLink: true,
    editLinkText: '在 Github 编辑此页',
    //editLinkPattern: '',
    
    //需要git插件支持才行
    lastUpdated: true,
    //最近更新时间戳 标签的文字。
    lastUpdatedText: '上次更新：',
    //贡献者
    contributors: true,
    contributorsText: 'learnemt',

    notFound: ['not found page!', '母鸡啊', '看起来我们进入了错误的链接', '我们怎么到这来了？', '这里什么都没有', '我们怎么到这来了？'],
    backToHome: '迷路了？点我回到首页',
    // 可折叠的侧边栏
    sidebar: {
      '/': [{
        text: '首页',
        collapsible: true,
        children: ['/'],
      }, ],
      '/Guide/': [{
        text: '指南',
        children: ['/Guide/README.md', '/Guide/getting-started.md'],
      }],
      '/Reference/': [{
        text: '官方文档',
        collapsible: true,
        children: ['/Reference/README.md', '/Reference/npm.md'],
      }],
    },
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      //字符串 - 页面文件路径
      //'Guide',
      {
        text: '指南',
        link: '/Guide/',
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: '了解更多',
        children: [{
          text: '官方文档',
          children: ['/Reference/README.md', '/Reference/npm.md'],
        }],
      },
      // 控制元素何时被激活
      {
        text: '参考',
        children: [{
            text: 'VuePress',
            link: '/Reference/README.md',
            // 该元素将一直处于激活状态
            activeMatch: '/Reference/README.md',
          },
          {
            text: 'Npm',
            link: '/Reference/npm.md',
            activeMatch: '/Reference/npm.md',
          },
        ],
      },
    ]
  }),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: 's',
          
        },
        '/en/': {
         placeholder: 's'
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    hotKeys: ['s','/'],
    maxSuggestions: 10
    })
  ]
}
