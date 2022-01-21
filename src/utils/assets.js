export const randomAssetURL = (assets) => {
  const assetPath = assets[Math.floor(Math.random() * assets.length)];

  return `${process.env.VUE_APP_PUBLIC_BUCKET}/${assetPath}`;
};
