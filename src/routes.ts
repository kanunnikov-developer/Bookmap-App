import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './views/AuthView.vue';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
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
