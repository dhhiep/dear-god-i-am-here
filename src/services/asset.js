const assets = [
  'https://dhgt2012.s3-ap-southeast-1.amazonaws.com/8220825580259829930.mp4',
  'https://dhgt2012.s3-ap-southeast-1.amazonaws.com/Carlo+Acutis+Team++(1)+-+TT.JPG',
  'https://dhgt2012.s3-ap-southeast-1.amazonaws.com/Carlo+Acutis+Team++(2)+-+TT.JPG',
];

export const fetch = () => {
  return new Promise((resolve) => {
    const asset = assets[Math.floor(Math.random() * assets.length)];

    resolve(asset);
  });
};
