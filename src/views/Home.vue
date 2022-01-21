<template>
  <AssetView :assetURL="home.currentAsset" :posterURL="home.currentPoster" />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AssetView from '@/components/assets/View.vue';

export default {
  created() {
    this.fetchAssets().then(() => {
      this.fetchAsset();
    });
  },
  components: {
    AssetView,
  },
  computed: {
    ...mapState(['home']),
  },
  methods: {
    ...mapActions('home', ['fetchAssets', 'fetchAsset']),
  },
};
</script>

<style lang="scss" scoped></style>
