import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import ViewProduct from "./ViewProduct.vue";
import Product from "./Product.vue";
import ProductReviews from "./ProductReviews.vue";

// Dynamic Route matching on /products/:productId
// Named routes => name: viewProduct
// Using Alias in routing => alias: '/shopping-cart'
export const routes = [
    { path: '', component: ProductList },
    { path: '/products/:productId/view', redirect: '/products/:productId' },
    { path: '/cart', component: Cart, alias:'/shopping-cart' },
    { path: '/products/:productId', name: "product", props: true, component: Product, children: [
        { path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
        { path: 'reviews', name: 'productReviews', props: true, component: ProductReviews }
    ] },
    { path: '*', component: { template: '<h1>Page not found</h1>' } }
]