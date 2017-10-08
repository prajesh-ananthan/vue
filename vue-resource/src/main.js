import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Root URL
Vue.http.options.root = 'https://vuejs-http-07102017.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
    console.log("Hello from the interceptor...");
    console.log(request);
    if (request.method === 'POST') {
        request.method = 'PUT';
    }
    // Topic: Intercepting resources
    // What is the use of this?
    next(response => {
        response.json = () => {
            return {
                messages: response.body
            }
        }
    });
});

new Vue({
    el: '#app',
    render: h => h(App)
});
