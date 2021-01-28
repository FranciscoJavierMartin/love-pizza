<template>
  <div>
    <nav-bar />
    <h1>Hello world</h1>
  </div>
</template>

<script  lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>