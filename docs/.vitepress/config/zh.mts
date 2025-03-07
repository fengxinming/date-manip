import { defineConfig } from 'vitepress'
import { generateAPISidebar } from './shared.mjs'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  description: "一个用于 JavaScript 和 TypeScript 类型检查的实用库。",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/zh' },
      { text: 'API', link: '/zh/api' }
    ],

    sidebar: [
      {
        text: 'API',
        items: generateAPISidebar('../../zh/api', '/zh/api')
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/date-manip.git' }
    ]
  }
})
