<template>
  <div>
    <h1 class="text-center">Register</h1>
    <form @submit.prevent="registerUser">
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
        <span v-if="usernameRequired" class="text-danger"
          >User name is required.</span
        >
      </div>
      <div
        class="form-group col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <label for="inputPassword">Password</label>
        <input
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          type="password"
          v-model="password"
        />
        <span v-if="passwordRequired" class="text-danger"
          >Password is required.</span
        >
      </div>
      <div
        class="form-group col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <label for="inputConfirmPassword">Confirm Password</label>
        <input
          id="inputConfirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          type="password"
          v-model="confirmPassword"
        />
        <span v-if="confirmPasswordRequired" class="text-danger"
          >Confirm Password is required.</span
        >
      </div>
      <div
        class="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3"
      >
        <button
          class="btn btn-primary btn-lg btn-block"
          type="submit"
          @click.prevent="registerUser"
        >
          Register
        </button>
      </div>
    </form>
    <div
      class="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 mt-3"
    >
      <span
        >Do you have an account?
        <router-link :to="LOGIN_PAGE_ROUTE">Click here</router-link></span
      >
    </div>
  </div>
</template>

<script>
import { LOGIN_PAGE_ROUTE } from "../constants/routes";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      usernameRequired: false,
      passwordRequired: false,
      confirmPasswordRequired: false,
    };
  },
  computed: {
    LOGIN_PAGE_ROUTE() {
      return LOGIN_PAGE_ROUTE;
    },
    matchPasswords() {
      return this.password === this.confirmPassword;
    },
  },
  methods: {
    registerUser() {
      this.usernameRequired = false;
      this.passwordRequired = false;
      this.confirmPasswordRequired = false;

      if (!this.username) {
        this.usernameRequired = true;
      } else if (!this.password) {
        this.passwordRequired = true;
      } else if (!this.confirmPassword) {
        this.confirmPasswordRequired = true;
      } else {
        this.$store
          .dispatch("auth/registerUser", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            this.$toast.error("Error on register");
          });
      }
    },
  },
};
</script>