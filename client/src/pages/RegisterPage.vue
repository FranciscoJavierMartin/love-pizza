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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../store';
import { AllActionTypes } from '../store/action-types';

export default defineComponent({
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');
    const store = useStore();

    const registerUser = () => {
      if (password.value === confirmPassword.value) {
        store.dispatch(AllActionTypes.REGISTER_USER, {
          username: username.value,
          password: password.value,
        });
      }
    };

    return {
      username,
      password,
      confirmPassword,
      registerUser,
    };
  },
});
</script>