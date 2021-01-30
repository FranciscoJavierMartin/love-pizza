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

export default {
  components: {
    NavBar,
  },
  mounted() {
    console.log('Hello');

    axios
      .post('http://localhost:5000/api/Users/login', {
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