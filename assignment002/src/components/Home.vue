<template>
    <div>
        <div class="container">
            <app-header></app-header>
            <div class="row">
                <app-server></app-server>
                <app-server-details></app-server-details>
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './shared/Header.vue'
    import Servers from './server/Servers.vue'
    import Footer from './shared/Footer.vue'
    import ServerDetails from './server/ServerDetails.vue'

    export default {
        components: {
            'app-header': Header,
            'app-server': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>