<template>
  <div>
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="loginUser">
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
        <label for="inputPassword">Email address</label>
        <input
          id="inputPassword"
          placeholder="Password"
          class="form-control"
          type="password"
          v-model="password"
        />
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          @click.prevent="loginUser"
        >
          Login
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
    };
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