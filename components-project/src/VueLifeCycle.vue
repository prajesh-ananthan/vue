<template>


</template>
<script>
    new Vue({
        el: '#app',
        data: {
            title: 'The VueJS instance'
        },
        beforeCreate: function () {
            console.log('beforeCreate()');
        },
        created: function () {
            console.log('created()');
        },
        beforeMount: function () {
            console.log('beforeMount()');
        },
        methods: {
            destroyed: function () {
                this.$destroy();
                console.log('destroyed()');
            }
        }
    });

</script>