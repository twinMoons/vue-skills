// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import './utils/base.js' // 普通的方式也可以完成base文件夹内容的自动注册
import Base from './utils/base2'
import resizeFontsize from './utils/rem'
import router from './router/index'
// import router from './router/index_normal'

Vue.config.productionTip = false

Vue.use(Base)

resizeFontsize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
