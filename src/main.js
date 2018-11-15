import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './../node_modules/bulma/css/bulma.css';
import './assets/style.css'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});