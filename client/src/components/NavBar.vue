<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <router-link class="navbar-brand" :to="HOME_PAGE_ROUTE"
      >Love Pizza</router-link
    >

    <!-- Not auth user -->
    <button
      v-if="!authUser"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="!authUser" class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            :to="LOGIN_PAGE_ROUTE"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            :to="REGISTER_PAGE_ROUTE"
            >Register</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Auth user -->
    <div class="dropdown text-light" v-if="authUser">
      <div
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ authUser.username }}
      </div>
      <div class="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="dropdownMenuLink">
        <span class="dropdown-item text-light" @click="this.signout()"
          >Sign Out</span
        >
      </div>
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