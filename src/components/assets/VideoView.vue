<template>
  <div id="video-viewer">
    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="false">
    </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';

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
        poster: this.posterURL,
      },
    };
  },
  props: {
    assetURL: {
      type: String,
    },
    posterURL: {
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
#video-viewer {
  text-align: center;
}

/deep/ .video-js {
  margin: auto;
  .vjs-big-play-button {
    top: calc(50vh - 40px);
    left: calc(50% - 40px);
  }
}
</style>
