import { createStore } from 'vuex';
import { usersModule } from './users';
import { authModule } from './auth';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: usersModule,
    auth: authModule,
  },
});
