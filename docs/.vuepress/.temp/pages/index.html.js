import comp from "D:/workspace/new/doc-electron-template/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"二级\",\"slug\":\"二级\",\"link\":\"#二级\",\"children\":[{\"level\":3,\"title\":\"三级\",\"slug\":\"三级\",\"link\":\"#三级\",\"children\":[]}]}],\"git\":{\"updatedTime\":1732605091000,\"contributors\":[{\"name\":\"娄松\",\"email\":\"\",\"commits\":2,\"url\":\"https://github.com/娄松\"},{\"name\":\"lousong@gmail.com\",\"email\":\"lousong@gmail.com\",\"commits\":1,\"url\":\"https://github.com/lousong@gmail.com\"}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"<h2>二级</h2>\\n<h3>三级</h3>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
