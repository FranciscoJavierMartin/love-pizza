<template>
  <div>
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="loginUser">
      <div
        class="form-group col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <label for="inputEmail">User name</label>
        <input
          id="inputEmail"
          placeholder="User name"
          class="form-control"
          type="text"
          v-model="username"
        />
      </div>
      <div
        class="form-group col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <label for="inputPassword">Password</label>
        <input
          id="inputPassword"
          placeholder="Password"
          class="form-control"
          type="password"
          v-model="password"
        />
      </div>
      <div
        class="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <button
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          @click.prevent="loginUser"
        >
          Login
        </button>
      </div>
    </form>
    <div
      class="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 mt-3"
    >
      <span
        >Do you need an account?
        <router-link :to="REGISTER_PAGE_ROUTE">Click here</router-link></span
      >
    </div>
  </div>
</template>

<script>
import { REGISTER_PAGE_ROUTE } from "../constants/routes";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    REGISTER_PAGE_ROUTE() {
      return REGISTER_PAGE_ROUTE;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch("auth/loginUser", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>