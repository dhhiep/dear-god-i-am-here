import split from 'lodash/split';
import last from 'lodash/last';
import toLower from 'lodash/toLower';

export const isVideoPath = (path) => {
  const videoExt = ['mp4'];
  return videoExt.includes(fileExt(path));
};

const fileExt = (path) => {
  return toLower(last(split(path, '.')));
};
