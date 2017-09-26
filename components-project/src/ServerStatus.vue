<template>
    <div>
        <h1>ServerStatus.vue</h1>
        <p>Server status: {{ status }}</p>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            // ES6 Style
            changeStatus() {
                this.status = 'Normal'
            }
        }
    }
</script>

<style></style>