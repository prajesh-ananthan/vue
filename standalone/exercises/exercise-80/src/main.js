import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue';
import Article from './Article.vue';

Vue.component('announcement', Announcement);
Vue.component('appArticle', Article);

// Declare an event bus for all components
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
