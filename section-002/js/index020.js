var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue JS!',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});