<template>
    <div v-if="product">
       
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>

    </div>
</template>

<script>
import { products } from "./data/products";

export default {
  // Using route props, Refer to routes.js with "props: true"
  props: {
    productId: {
      required: true
    }
  },
  data() {
    return {
      products: products,
      product: null
    };
  },
  created() {
    // let productId = this.$route.params.productId;
    this.product = this.getProduct(this.productId);
  },
  watch: {
    productId(newValue, oldValue) {
      this.product = this.getProduct(newValue);
    }
  },
  methods: {
    getProduct(productId) {
      let match = null;
      this.products.forEach(product => {
        if (product.id == productId) {
          match = product;
        }
      });

      return match;
    },
    goBack() {
      // Navigates to the front page (ProductList.vue) according to routes.js
      this.$router.push('/');
    }
  },
  computed: {
    relatedProducts() {
      if (this.product === null) {
        return [];
      }
      let related = [];
      let count = 0;
      this.products.forEach(product => {
        if (product.id != this.product.id && count < 5) {
          related.push(product);
          count++;
        }
      });
      return related;
    }
  }
};
</script>