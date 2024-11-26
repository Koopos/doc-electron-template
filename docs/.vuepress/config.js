/*
 * @Author: 娄松 
 * @Date: 2024-11-26 14:20:38
 * @LastEditors: 娄松 
 * @LastEditTime: 2024-11-26 15:08:05
 * @FilePath: \doc-electron-template\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [ {text: '首页', link: '/'}],
    themePlugins: {
    }
  }),
  base: '/electron-template/',
  lang: 'zh-CN',
  title: 'xx文档',
  description: '最新版文档',
})