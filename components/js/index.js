// The component extends the Vue instance
Vue.component('my-cmp', {
    // declare as function so it does not interfere
    // with the Vue instance
    data: function () {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}</p>'
});

// Declare component as variable
var person = ('my-cmp', {
    // declare as function so it does not interfere
    // with the Vue instance
    data: function () {
        return {
            name: 'Prajesh'
        }
    },
    template: '<p>Hello: {{ name }}</p>'
});

new Vue({
    el: '.app',
    components: {
        'person-cmp' : person
    }
});