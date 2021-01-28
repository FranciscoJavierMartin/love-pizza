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

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');

    const loginUser = () => {
      console.log('Username', username.value, 'Password', password.value);
    };

    return {
      username,
      password,
      loginUser,
    };
  },
});
</script>