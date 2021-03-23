import Vue from 'vue';
import Vuex from 'vuex';

import * as home from '@/store/modules/home.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
