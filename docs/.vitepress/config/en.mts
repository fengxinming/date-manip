import { defineConfig } from 'vitepress'
import { generateAPISidebar } from './shared.mjs'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  description: "A utility library for type checking in JavaScript and TypeScript.",
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: 'API',
        items: generateAPISidebar('../../en/api', '/api')
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/date-manip.git' }
    ]
  }
})
