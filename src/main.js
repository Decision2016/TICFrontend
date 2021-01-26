// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import bootstrap from '../static/css/bootstrap.min.css'
import 'view-design/dist/styles/iview.css'
import '../static/css/chartist.min.css'
import vueCropper from 'vue-cropper'
import ViewUI from 'view-design'

Vue.config.productionTip = false
Vue.use(vueCropper)
Vue.use(ViewUI)
Vue.use(bootstrap)

Vue.prototype.$Message.config({
  duration: 2
})
Vue.prototype.$error = (s) => Vue.prototype.$Message.error(s)
Vue.prototype.$info = (s) => Vue.prototype.$Message.info(s)
Vue.prototype.$success = (s) => Vue.prototype.$Message.success(s)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
