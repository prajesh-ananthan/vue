import Vue from "vue";
import App from "./App.vue";

// Register vue router
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.filter("currency", function (value) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return formatter.format(value);
});

// Register vue router
Vue.use(VueRouter);

// Adding routes inside the routes array
// Catch all other routes and render the 404 page
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export const eventBus = new Vue();

// Register vue router
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});