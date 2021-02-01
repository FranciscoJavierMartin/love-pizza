import agent from '../api/agent';
import { JWT_LOCALSTORAGE } from '../constants/common';

export const authModule = {
  namespaced: true,
  state: () => ({
    currentUser: null,
  }),
  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
      if (payload) {
        localStorage.setItem(JWT_LOCALSTORAGE, JSON.stringify(payload));
      } else {
        localStorage.removeItem(JWT_LOCALSTORAGE);
      }
    },
  },
  actions: {
    loginUser({ commit }, payload) {
      agent.Auth.login(payload).then((user) => {
        commit('setCurrentUser', user);
      });
    },
    logoutUser({ commit }) {
      commit('setCurrentUser', null);
    },
    registerUser({ commit }, payload) {
      agent.Auth.register(payload).then((user) => {
        commit('setCurrentUser', user);
      });
    },
    setCurrentUser({ commit }, payload) {
      commit('setCurrentUser', payload);
    },
  },
};
