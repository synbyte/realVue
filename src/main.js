import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
