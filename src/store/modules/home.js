export const namespaced = true;

import * as AssetService from '@/services/asset';

export const state = {
  currentAsset: '',
};

export const mutations = {
  SET_ASSET(state, asset) {
    state.currentAsset = asset;
  },
};

export const actions = {
  setAsset({ commit }, asset) {
    commit('SET_ASSET', asset);
  },
  fetchAsset({ dispatch }) {
    AssetService.fetch().then((asset) => {
      dispatch('setAsset', asset);
    });
  },
};
