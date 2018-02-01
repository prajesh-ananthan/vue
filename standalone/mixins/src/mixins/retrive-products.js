export default {
  data() {
    return {
      products: []
    };
  },
  created() {
      this.products = this.getProductList();
  },
  methods: {
    getProductList() {
      return [
        { name: "Personal", price: 9.95 },
        { name: "Startup", price: 12.95 },
        { name: "Enterprise", price: 10.95 }
      ];
    }
  }
};



