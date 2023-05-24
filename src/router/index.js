import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        "title": "Home",
      }
    },
    {
      path: '/',
      name: 'test',
      component: TestView,
      meta: {
        "title": "Test",
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        "title": "About",
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = "FLAPI | "+to.meta?.title ?? "Default Title";
  next();
});

export default router
