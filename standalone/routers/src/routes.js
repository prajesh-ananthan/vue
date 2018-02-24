import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import ViewProduct from "./ViewProduct.vue";

// Dynamic Route matching on /products/:productId
// Named routes => name: viewProduct
export const routes = [
    { path: '', component: ProductList },
    { path: '/products/:productId/view', redirect: '/products/:productId' },
    { path: '/cart', component: Cart, alias:'/shopping-cart' },
    { path: '/products/:productId', name: "viewProduct", props: true, component: ViewProduct },
    { path: '*', component: { template: '<h1>Page not found</h1>' } }
]