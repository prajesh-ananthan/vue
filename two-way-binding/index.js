new Vue({
    el: '#app',
    data: {
        name: 'Prajesh',
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function () {
            console.log('Computed');
            return this.result();
        }
    },
    // Reset the counter after 2 seconds
    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function () {
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }

    }
});

// Using computed properties for executing methods where its dependencies changes
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.doReverse();
            // return this.message.split('').reverse().join('');
        }
    },
    methods: {
        doReverse: function () {
            return this.message.split('').reverse().join('');
        }
    }
});