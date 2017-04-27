// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import svgicon from 'vue-svgicon'
import router from './router'

Vue.use(svgicon)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },

  mutations: {

  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

