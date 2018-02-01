<template>
    <div class="container">
        <div class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">E-Commerce INC</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#" @click.prevent="activeView = 'app-product-list'">Product List</a></li>
                        <li><a href="#" @click.prevent="activeView = 'app-sitemap'">Sitemap</a></li>
                        <li></li>
                    </ul>
                    </div>    
            </div>            
        </div>

        <component :is="activeView"></component>
    </div>
</template>



<script>
import ListProducts from "./ListProducts.vue";
import Sitemap from "./Sitemap.vue";

export default {
  data() {
    return {
      activeView: "app-product-list"
    };
  },
  components: {
    appProductList: ListProducts,
    appSitemap: Sitemap
  }
};
</script>

<style>

</style>
