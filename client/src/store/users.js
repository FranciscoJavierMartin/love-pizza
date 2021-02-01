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
      agent.Users.top10()
        .then((users) => {
          console.log(users);
          commit('setUsers', users);
        })
        .catch(console.log);
    },
    vote({ commit }, payload) {
      agent.Users.vote(payload)
        .then(console.log)
        .catch(console.log);
    },
  },
};
