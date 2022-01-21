<template>
  <div id="asset-viewer">
    <template v-if="isVideo">
      <VideoView :assetURL="assetURL" :posterURL="posterURL" :screenWidth="screenWidth" />
    </template>

    <template v-else>
      <ImageView :assetURL="assetURL" />
    </template>
  </div>
</template>

<script>
import JQuery from 'jquery';
import ImageView from '@/components/assets/ImageView';
import VideoView from '@/components/assets/VideoView';
import { isVideoPath } from '@/utils/file_extension';

export default {
  props: {
    assetURL: {
      type: String,
    },
    posterURL: {
      type: String,
    },
  },
  components: {
    ImageView,
    VideoView,
  },
  computed: {
    isVideo() {
      return isVideoPath(this.assetURL);
    },
    screenWidth() {
      const maxScreenWidth = 768;
      const screenWidth = JQuery(window).width();

      return screenWidth > maxScreenWidth ? maxScreenWidth : screenWidth;
    },
  },
};
</script>
