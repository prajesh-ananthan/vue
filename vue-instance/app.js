const data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

Vue.component('hello', {
    template: '<p>Hello</p>'
});


var vm1 = new Vue({
    el: '#app',
    data: data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            console.log(this.$refs);
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

// Using ref
vm1.$refs.heading.innerText = 'Something else';

// $data
console.log(vm1.$data === data);

// Change the title after 3 seconds
setTimeout(function () {
    vm1.title = 'Changed by timer';
}, 3000);

const vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second instance'
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed!';
        }
    }
});

// Using component and mounting to an existing instance above
var vm3 = new Vue({
    template: '<p>Hello</p>'
});

vm3.$mount();
document.getElementById('app2').appendChild(vm3.$el);
