import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({
  state: {
    menu: null,
    allMenu: [],
    error: null,
    searchPanelState: false,
  },
  getters: {
    menu: state => state.menu,
    allMenu: state => state.allMenu,
    menuWithCursor: state => cursor => cursor ? state.allMenu.slice((cursor * 10), (cursor * 10 + 10)) : state.allMenu.slice(0, 10),
    menuMaxCursor: state => Math.ceil(state.allMenu.length / 10),
    findMenu: state => name => state.allMenu.filter(menu => menu.name.indexOf(name) === 0),
    error: state => state.error,
    searchPanelState: state => state.searchPanelState,
  },
  mutations: {
    /* eslint-disable no-return-assign */
    /* eslint-disable no-param-reassign */
    setMenu: (state, payload) => state.menu = payload,
    setAllMenu: (state, payload) => state.allMenu = payload,
    setError: (state, payload) => state.error = payload,
    setSearchPanelState: (state, payload) => state.searchPanelState = payload,
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
    FETCH_ALL_MENU({ commit }) {
      commit('setAllMenu', []);
      return axios.get('https://matsuya.makotia.me/v4/search')
        .then((menu) => {
          commit('setAllMenu', menu.data);
        }).catch((err) => {
          commit('setError', err);
        });
    },
  },
});

export default store;
