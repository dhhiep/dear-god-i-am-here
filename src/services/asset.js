import { getResource } from '@/services/api';

export const fetch = () => {
  return new Promise((resolve) => {
    getResource().then((resp) => {
      const baseEndpoint = 'https://daihoigioitre2021.s3-ap-southeast-1.amazonaws.com';

      resolve(`${baseEndpoint}/${resp.data}`);
    });
  });
};
