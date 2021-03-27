<template>
  <div id="image-viewer">
    <img :src="assetURL" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    assetURL: {
      type: String,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

#image-viewer {
  text-align: center;
  img {
    width: 100%;
    height: auto;
    @include responsiveFrom(medium) {
      width: auto;
      height: 100vh;
    }
  }
}
</style>
