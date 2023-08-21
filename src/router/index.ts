import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/index.vue';
import DemoView from "../views/Demo/index.vue";
import RootView from "../views/RootView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root-view',
      component: RootView,
      children: [
        {
          path: "home",
          name: "home-view",
          alias: "/",
          component: HomeView
        },
        {
          path: "demo",
          name: "demo-view",
          component: DemoView
        },
      ]
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
