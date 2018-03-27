import Vue from 'vue'
import App from './App.vue'
import MainView from './components/MainView.vue'
import Basket from './components/Basket.vue'
// import Modal from './components/Modal.vue'

Vue.component('main-view', MainView);
Vue.component('basket', Basket);
// Vue.component('modal-template', Modal);
new Vue({
  el: '#app',
  render: h => h(App)
})
