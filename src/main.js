import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import home from './components/home.vue'
import login from './components/loginpage.vue'
import signup from './components/signUp.vue'
import product from './components/product.vue'
import productadd from './components/productadd.vue'
import seller from './components/seller.vue'
import productdelete from './components/productdelete.vue'
import productlist from './components/productlist.vue'
import sellerlogin from './components/sellerlogin.vue'




const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/login', name: 'login', component: login},
    {path: '/signup', name: 'signup', component: signup},
    {path: '/product', name: 'product', component: product},
    {path: '/productadd', name: 'productadd', component: productadd},
    {path: '/seller', name: 'seller', component: seller},
    {path: '/productdelete', name: 'productdelete', component: productdelete},
    {path: '/productlist', name: 'productlist', component: productlist},
    {path: '/sellerlogin', name: 'sellerlogin', component: sellerlogin}
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')



