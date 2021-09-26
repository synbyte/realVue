import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
 
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
