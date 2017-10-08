import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import TestComponent from './TestComponent.vue'

// Init the components
Vue.component('app-server-status', Home);
Vue.component('test-component', TestComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
