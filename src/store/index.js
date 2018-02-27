import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menu: null,
    error: null,
  },
  getters: {
    menu: state => state.menu,
    error: state => state.error,
  },
  mutations: {
    /* eslint-disable no-return-assign */
    /* eslint-disable no-param-reassign */
    setMenu: (state, payload) => state.menu = payload,
    setError: (state, payload) => state.error = payload,
  },
  actions: {
    FETCH_MENU({ commit }) {
      commit('setMenu', null);
      return axios.get('https://matsuya.makotia.me/v4/random')
        .then((menu) => {
          commit('setMenu', menu.data);
        }).catch((err) => {
          commit('setError', err);
        });
    },
  },
});
export default store;
