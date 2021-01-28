<template>
  <nav>
    <router-link :to="HOME_PAGE_ROUTE">Love Pizza</router-link>
    <div>
      <router-link :to="LOGIN_PAGE_ROUTE">Login</router-link>
      <router-link :to="REGISTER_PAGE_ROUTE">Register</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  HOME_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from '../constants/routes';

export default {
  setup() {
    return { HOME_PAGE_ROUTE, REGISTER_PAGE_ROUTE, LOGIN_PAGE_ROUTE };
  },
};
</script>