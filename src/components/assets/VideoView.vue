<template>
  <div id="test">
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="false">
    </video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';

import { videoPlayer } from 'vue-video-player';

export default {
  data() {
    return {
      playerOptions: {
        width: this.screenWidth,
        autoplay: true,
        muted: false,
        sources: [
          {
            type: 'video/mp4',
            src: this.assetURL,
          },
        ],
        poster: 'https://dhgt2012.s3-ap-southeast-1.amazonaws.com/Untitled-1-05.png',
      },
    };
  },
  props: {
    assetURL: {
      type: String,
    },
    screenWidth: {
      type: Number,
      default: 300,
    },
  },
  components: {
    videoPlayer,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .vjs-big-play-button {
  top: calc(50% - 40px);
  left: calc(50% - 40px);
}
</style>
