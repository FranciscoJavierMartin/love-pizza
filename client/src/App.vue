<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import axios from 'axios';
import agent from './api/agent';

export default {
  components: {
    NavBar,
  },
  mounted() {
    agent.User.register({
      username: 'test',
      password: 'test',
    })
      .then((a) => {
        console.log('Then', a);
      })
      .catch((a) => {
        console.log('Error', a);
      });
  },
};
</script>