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
import { useStore } from '../store';
import { AllActionTypes } from '../store/action-types';

export default defineComponent({
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');
    const store = useStore();

    const loginUser = () => {
      store.dispatch(AllActionTypes.LOGIN_USER, {
        username: username.value,
        password: password.value,
      });
    };

    return {
      username,
      password,
      loginUser,
    };
  },
});
</script>