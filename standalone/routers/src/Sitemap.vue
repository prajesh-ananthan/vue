<template>
<div>
    <h1>Sitemap</h1>
<ul>
    <li>Home</li>
    <li>Products
        <ul>
            <li v-for="product in products">{{ product.name }} | {{ product.price }}</li>
        </ul>
    </li>
</ul>
</div> 
</template>

<script>
import RetriveProducts from "./mixins/retrive-products";

export default {
  mixins: [RetriveProducts]
};
</script>
