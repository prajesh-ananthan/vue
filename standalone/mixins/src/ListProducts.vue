<template>
<div>
    <h1>Product List</h1>
<ul>
    <li v-for="product in products">{{ product.name }} | {{ product.price | currency }}</li>
</ul>
</div> 
</template>

<script>
import RetriveProducts from "./mixins/retrive-products";

export default {
  mixins: [RetriveProducts]
};

</script>
