import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

import {
  HOME_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from './constants/routes';

const history = createWebHistory();

const routes = [
  { path: HOME_PAGE_ROUTE, component: HomePage },
  { path: REGISTER_PAGE_ROUTE, component: RegisterPage },
  { path: LOGIN_PAGE_ROUTE, component: LoginPage },
];

const router = createRouter({ history, routes });

export default router;
