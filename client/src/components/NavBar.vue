<template>
  <nav>
    <router-link :to="HOME_PAGE_ROUTE">Love Pizza</router-link>
    <div v-if="authUser">
      <strong>{{ authUser.username }}</strong>
      <button @click="signout">Sign Out</button>
    </div>
    <div v-else>
      <router-link :to="LOGIN_PAGE_ROUTE">Login</router-link>
      <router-link :to="REGISTER_PAGE_ROUTE">Register</router-link>
    </div>
  </nav>
</template>

<script>
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from "../constants/routes";

export default {
  computed: {
    authUser() {
      return this.$store.getters["auth/currentUser"];
    },
    HOME_PAGE_ROUTE() {
      return HOME_PAGE_ROUTE;
    },
    LOGIN_PAGE_ROUTE() {
      return LOGIN_PAGE_ROUTE;
    },
    REGISTER_PAGE_ROUTE() {
      return REGISTER_PAGE_ROUTE;
    },
  },
  methods: {
    signout() {
      this.$store.dispatch("auth/setCurrentUser", null);
    },
  },
};
</script>