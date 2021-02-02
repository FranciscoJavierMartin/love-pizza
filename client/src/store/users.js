import agent from '../api/agent';

export const usersModule = {
  namespaced: true,
  state: () => ({
    users: [],
  }),
  getters: {
    top10Users(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers({ commit }) {
      return agent.Users.top10().then((users) => {
        commit('setUsers', users);
      });
    },
    vote({ dispatch }, payload) {
      return agent.Users.vote(payload).then(() => {
        dispatch('getUsers');
      });
    },
  },
};
