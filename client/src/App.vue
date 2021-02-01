<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>