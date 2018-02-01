import Vue from "vue";
import App from "./App.vue";

// Global filter to be used by multiple components
Vue.filter("currency", function(value) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return formatter.format(value);
});

new Vue({
  el: "#app",
  render: h => h(App)
});