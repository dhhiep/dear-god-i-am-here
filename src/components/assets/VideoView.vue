<template>
  <div id="video-viewer">
    <video autoplay>
      <source :src="assetURL" type="video/mp4" />
    </video>
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
video {
  width: 100%;
  height: auto;
}
</style>
