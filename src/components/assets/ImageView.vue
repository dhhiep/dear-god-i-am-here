<template>
  <div id="Image-viewer">
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
img {
  width: 100%;
  height: auto;
}
</style>
