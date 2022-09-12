//默认主题集成的模块
import {
  defaultTheme
} from '@vuepress/theme-default'
// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
// import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
// import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import {
  searchPlugin
} from '@vuepress/plugin-search'
// import { prismjsPlugin } from '@vuepress/plugin-prismjs'
// import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
// import { gitPlugin } from '@vuepress/plugin-git'

export default {
  locales: {
    //base: '/CIuse/',

    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: '简体中文',
      title: 'Demo',
      description: 'Vue 驱动的静态网站生成器',
      head: [
        ['link', {
          rel: 'icon',
          href: '/logo.png'
        }]
      ]
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    // },
  },
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  theme: defaultTheme({
    // 在这里进行配置
    // locales: {
    //   '/': {
    //     selectLanguageName: '简体中文',
    //   },
    //   '/en/': {
    //     selectLanguageName: 'English',
    //   },
    // },

    // 可折叠的侧边栏
    sidebar: {
      '/': [{
        text: '首页',
        collapsible: true,
        children: ['/'],
      }, ],
      '/Guide': [{
          text: '指南',
          collapsible: true,
          children: ['/Guide/README.md', '/Guide/Test.md'],
        },
        {
          text: '官方文档',
          collapsible: true,
          children: ['/Guide/Official.md'],
        },
      ],
    },

    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      //字符串 - 页面文件路径
      'Guide',
      // // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['group1', 'group2'],
      // }
    ],
    home: '/',
    logo: '/logo.png',
    colorMode: 'auto',
    colorModeSwitch: true,
    //gitub
    repo: 'https://github.com/learnemt/CIuse',
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
    backToHome: '迷路了？点我回到首页'
  }),
  plugins: [
    //backToTopPlugin(),
    //mediumZoomPlugin({
    // 配置项
    //}),
    //nprogressPlugin(),
    searchPlugin({
      // 配置项
      hotKeys: ['s', '/'],
      maxSuggestions: 10
    }),
    // prismjsPlugin({
    //   // 配置项
    //   preloadLanguages: ['markdown', 'jsdoc', 'yaml']
    // }),
    // activeHeaderLinksPlugin({
    //   // 配置项
    // }),
    // gitPlugin({
    //   // 配置项  
    // }),
  ]
}