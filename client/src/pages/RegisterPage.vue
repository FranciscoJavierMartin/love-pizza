<template>
  <div>
    <h1 class="text-center">Register</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="inputEmail">User name</label>
        <input
          id="inputEmail"
          placeholder="User name"
          class="form-control"
          type="text"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="inputConfirmPassword">Confirm Password</label>
        <input
          id="inputConfirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          type="password"
          v-model="confirmPassword"
        />
      </div>
      <div>
        <button
          class="btn btn-primary btn-lg btn-block"
          type="submit"
          @click.prevent="registerUser"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    registerUser() {
      this.$store.dispatch("auth/registerUser", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>