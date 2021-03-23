<template>
  <AssetView :assetURL="home.currentAsset" />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AssetView from '@/components/assets/View.vue';

export default {
  created() {
    this.fetchAsset();
  },
  components: {
    AssetView,
  },
  computed: {
    ...mapState(['home']),
  },
  methods: {
    ...mapActions('home', ['fetchAsset']),
  },
};
</script>

<style lang="scss" scoped></style>
