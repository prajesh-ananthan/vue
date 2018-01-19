import Vue from 'vue'
import App from './App.vue'
// Register the component at main.js script
import Announcement from './Announcement'

Vue.component('announcement', Announcement);

new Vue({
  el: '#app',
  render: h => h(App)
})
