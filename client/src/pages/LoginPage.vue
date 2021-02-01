<template>
  <div>
    <form @submit.prevent="loginUser">
      <div>
        <input placeholder="Name" type="text" v-model="username" />
      </div>
      <div>
        <input placeholder="Password" type="password" v-model="password" />
      </div>
      <div>
        <button type="submit" @click.prevent="loginUser">Login</button>
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