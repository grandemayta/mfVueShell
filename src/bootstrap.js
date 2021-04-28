import { createApp, defineAsyncComponent } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('mfUserList/UserList')) 
  },
  /* {
    path: '/about',
    component: defineAsyncComponent(() => import('mfUserDetail/About'))
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
