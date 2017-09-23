new Vue({
    el: '#app',
    data: {
        attachedRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                green: this.attachedRed,
                blue: !this.attachedRed
            }

        }
    }

});