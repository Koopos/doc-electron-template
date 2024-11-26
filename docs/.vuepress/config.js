import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [ {text: '首页', link: '/'}],
    sidebar: [
      {text: '欢迎',prefix:'/', link: '/',children: [{text:'必读',link: '/read'}]}
    ]
  }),
  base: '/electron-template/',
  lang: 'zh-CN',
  title: 'xx文档',
  description: '最新版文档',
})