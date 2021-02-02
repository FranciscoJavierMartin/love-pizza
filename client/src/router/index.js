import { createRouter, createWebHistory } from 'vue-router';
import { JWT_LOCALSTORAGE } from '../constants/common';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { onlyNonAuthUser: true },
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { onlyNonAuthUser: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store);
  const isAuthenticated = !!localStorage.getItem(JWT_LOCALSTORAGE);

  if (to.meta.onlyNonAuthUser) {
    if (!isAuthenticated) {
      next();
    } else {
      next({ name: 'HomePage' });
    }
  } else {
    next();
  }
});

export default router;
