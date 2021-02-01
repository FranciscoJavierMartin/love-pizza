<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import { JWT_LOCALSTORAGE } from './constants/common';
import { useStore } from './store';
import { AllActionTypes } from './store/action-types';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      const user = localStorage.getItem(JWT_LOCALSTORAGE);

      if (user) {
        store.dispatch(AllActionTypes.SET_CURRENT_USER, JSON.parse(user));
      }
    });
  },
});
</script>