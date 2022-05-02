import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')

    },
    {
        path: '/logon',
        name: 'login',
        component: () =>
            import ('@/views/LogonView.vue') // "=>" equivale a uma "function(){}"

    },
    {
        path: '/usuario_add',
        name: 'usuario_add',
        component: () =>
            import ('@/views/UsuarioForm.vue') // "=>" equivale a uma "function(){}"

    },
    {
        path: '/usuario_list',
        name: 'usuario_list',
        component: () =>
            import ('@/views/UsuarioList.vue') // "=>" equivale a uma "function(){}"

    },
    {
        path: '/usuario_perfil',
        name: 'usuario_pefil',
        component: () =>
            import ('@/views/UsuarioPerfil.vue') // "=>" equivale a uma "function(){}"

    },
    {
        path: '/pedidos',
        name: 'pedidos',
        component: () =>
            import ('@/views/PedidosView.vue') // "=>" equivale a uma "function(){}"

    },
    {
        path: '/produtos',
        name: 'produtos',
        component: () =>
            import ('@/views/ProdutosView.vue')

    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;