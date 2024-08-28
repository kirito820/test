import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import CartView from './views/CartView.vue';
import OrderView from './views/OrderView.vue';

const routes = [
    {
        path:'/',
        component:HomeView
    },
    {
        path:'/home',
        component:HomeView
    },
    {
        path:'/cart',
        component:CartView
    },
    {
        path:'/order',
        component:OrderView
    }
];

const router = createRouter({
    routes: routes ,
    history: createWebHistory()
});

const app = createApp(App);

app.use(ElementPlus);

app.use(router);
app.mount('#app');