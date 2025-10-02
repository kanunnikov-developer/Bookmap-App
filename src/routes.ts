import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './views/AuthView.vue';
import MainView from './views/MainView.vue';
import TestComp from './components/TestComp.vue';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
    },
    {
      path: '/main',
      component: MainView,
      children: [
        {
          path: '',
          component: TestComp,
        },
      ],
    },
  ],
  history: createWebHistory(),
});
