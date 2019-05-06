// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './utils/router'
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'
import '@/icons'
import '@/style/main.scss'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(store),
  components: { App },
  template: '<App/>'
})
