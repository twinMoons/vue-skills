// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import resizeFontsize from './utils/rem'

Vue.config.productionTip = false

const requireComponent = require.context(
  // 其组件目录的相对路径
  './base',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

// console.log(Object.prototype.toString.call(requireComponent))
// console.dir(requireComponent)
// console.log(requireComponent.keys())

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // console.log(componentConfig)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // console.log(componentName)
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

resizeFontsize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
