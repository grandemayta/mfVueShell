import { createApp, defineAsyncComponent } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

const routes = [
  {
    path: '/users',
    component: defineAsyncComponent(() => import('mfUserList/UserList')) 
  },
  {
    path: '/users/:id',
    component: defineAsyncComponent(() => import('mfUserDetail/UserDetail'))
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
