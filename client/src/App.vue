<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { JWT_LOCALSTORAGE } from "./constants/common";

export default {
  components: {
    NavBar,
  },
  mounted() {
    const user = localStorage.getItem(JWT_LOCALSTORAGE);
    this.$store.dispatch("auth/setCurrentUser", JSON.parse(user));
  },
};
</script>