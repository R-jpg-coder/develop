// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    bets: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBets(state, bets) {
      state.bets = bets;
    },
  },
  actions: {
    fetchUser({ commit }) {
      // Logic to fetch user data from an API
    },
    fetchBets({ commit }) {
      // Logic to fetch available bets from an API
    },
  },
  modules: {},
});
