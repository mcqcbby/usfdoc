import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "USF V2",
  description: "基于原版SAPI的无名氏服务器管理框架",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页|Home', link: '/' },
      { text: '团队|Team', link: '/team.html' },
      { text: '快速开始|Quick Use', link: '/quick-use.html' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '快速开始', link: '/quick-use.html' },
          { text: '常见问题解答', link: '/faq.html' },
          { text: '更新日志', link: '/change-log.html' },
          { text: '版本对应表', link: '/edition.html' },
        ]
      },
     {
        text: '详细文档',
        items: [
          { text: '如何使用领地', link: '/fief.html' },
          { text: '如何使用商店', link: '/shop.html' },
          { text: '其他教程', link: '/other.html' }
        ]
      },
      {
        text: '关于我们',
        items: [
          { text: '维护团队', link: '/team.html' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EarthDLL/Unknown-Server-Framework' }
    ]
  }
})
