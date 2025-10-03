import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './views/AuthView.vue';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
      name: 'auth',
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/IndexVue.vue'),
          name: 'main',
        },
        {
          path: ':alias',
          component: () => import('./views/CategoryVue.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('./views/NotFound.vue'),
      name: 'NotFound',
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name != 'auth') {
    return { name: 'auth' };
  }
});
