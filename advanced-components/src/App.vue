<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                {{ selectedComponent }}
                <component :is="selectedComponent">
                    <p>Default content</p>
                </component>
                <!--<appQuote>-->
                    <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
                    <!--<p slot="content">Wonderful Quote</p>-->
                <!--</appQuote>-->
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue'
    import New from './components/New.vue'
    import Author from './components/Author.vue'

    export default {
        data: function () {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },

        components: {
            appQuote: Quote,
            appNew: New,
            appAuthor: Author
        }

    }
</script>

<style>
</style>
