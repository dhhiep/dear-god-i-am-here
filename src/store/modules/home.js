export const namespaced = true;

import { isVideoPath } from '@/utils/file_extension';
import axios from 'axios';
import { randomAssetURL } from '@/utils/assets';

export const state = {
  assets: [],
  currentAsset: '',
  currentPoster: '',
};

export const mutations = {
  SET_ASSETS(state, assets) {
    state.assets = assets;
  },
  SET_ASSET(state, asset) {
    state.currentAsset = asset;
  },
  SET_POSTER(state, poster) {
    state.currentPoster = poster;
  },
};

export const actions = {
  setAssets({ commit }, assets) {
    commit('SET_ASSETS', assets);
  },
  setAsset({ commit }, asset) {
    commit('SET_ASSET', asset);
  },
  setPoster({ commit }, poster) {
    commit('SET_POSTER', poster);
  },
  fetchAssets({ dispatch }) {
    return axios.get(process.env.VUE_APP_PUBLIC_BUCKET).then((response) => {
      const assetRegexp = /((lixi|lixi-posters|lixi-tet|lixi-tet-posters)\/(\d|\w)+\.(png|jpg|mp4))/gm;
      const assetPaths = response.data.match(assetRegexp);

      dispatch('setAssets', assetPaths);
    });
  },
  fetchAsset({ dispatch, getters }) {
    const assetURL = getters.fetchAsset;

    if (isVideoPath(assetURL)) {
      dispatch('fetchVideoPoster');
    }

    dispatch('setAsset', assetURL);
  },
  fetchVideoPoster({ dispatch, getters }) {
    dispatch('setPoster', getters.fetchVideoPoster);
  },
};

export const getters = {
  appName() {
    const subdomain = window.location.host.split('.')[0];

    return subdomain == 'lixi' ? 'lixi' : 'lixi-tet';
  },
  fetchVideoPoster(state) {
    const pathName = `${getters.appName}-posters/`;
    const posters = state.assets.filter((assetPath) => assetPath.includes(pathName));

    return randomAssetURL(posters);
  },
  fetchAsset(state, getters) {
    const pathName = `${getters.appName}/`;
    const posters = state.assets.filter((assetPath) => assetPath.includes(pathName));

    return randomAssetURL(posters);
  },
};
