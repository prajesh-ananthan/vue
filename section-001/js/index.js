var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue JS!',
        counter: 0
    },
    methods: {
    	sayHello : function() {
    		return 'Hello';
    	},
    	increase : function() {
    		this.counter++;
    	}
    }
});

new Vue ({
	el: '#event',
	data: {
		counter: 0
	},
	methods: {
		increase: function() {
			this.counter++;
		}
	}
});