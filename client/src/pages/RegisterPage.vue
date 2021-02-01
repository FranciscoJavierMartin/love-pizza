<template>
  <div>
    <form @submit.prevent="registerUser">
      <div>
        <input placeholder="Name" type="text" v-model="username" />
      </div>
      <div>
        <input placeholder="Password" type="password" v-model="password" />
      </div>
      <div>
        <input
          placeholder="Confirm Password"
          type="password"
          v-model="confirmPassword"
        />
      </div>
      <div>
        <button type="submit" @click.prevent="registerUser">Register</button>
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