<template>
  <div id="asset-viewer">
    <template v-if="isVideo">
      <VideoView :assetURL="assetURL" />
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
  },
};
</script>

<style lang="sass" scoped></style>
