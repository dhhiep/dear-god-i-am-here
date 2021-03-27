<template>
  <div id="asset-viewer">
    <template v-if="isVideo">
      <VideoView :assetURL="assetURL" :screenWidth="screenWidth" />
    </template>

    <template v-else>
      <ImageView :assetURL="assetURL" />
    </template>
  </div>
</template>

<script>
import split from 'lodash/split';
import last from 'lodash/last';
import toLower from 'lodash/toLower';
import ImageView from '@/components/assets/ImageView';
import VideoView from '@/components/assets/VideoView';
import JQuery from 'jquery';

export default {
  props: {
    assetURL: {
      type: String,
    },
  },
  components: {
    ImageView,
    VideoView,
  },
  computed: {
    isVideo() {
      const fileExtenstion = toLower(last(split(this.assetURL, '.')));

      return ['mp4'].includes(fileExtenstion);
    },
    screenWidth() {
      const maxScreenWidth = 768;
      const screenWidth = JQuery(window).width();

      return screenWidth > maxScreenWidth ? maxScreenWidth : screenWidth;
    },
  },
};
</script>
