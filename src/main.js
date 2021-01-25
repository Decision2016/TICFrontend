// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import bootstrap from '../static/bootstrap.min.css'
import '../static/chartist.min.css'
import vueCropper from 'vue-cropper'
Vue.config.productionTip = false
Vue.use(vueCropper)
Vue.use(bootstrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
