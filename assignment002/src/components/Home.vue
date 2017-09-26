<template>
    <div>
        <div class="container">
            <app-header></app-header>

            <app-server></app-server>

            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Servers from './Servers.vue'
    import Footer from './Footer.vue'

    export default {
        components: {
            'app-header': Header,
            'app-server': Servers,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>