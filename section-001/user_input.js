new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue JS!'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        }
    }
});