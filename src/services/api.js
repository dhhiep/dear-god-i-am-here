import axios from 'axios';

export const getResource = () => {
  const apiEndpoint = process.env.VUE_APP_BACKEND_URL;

  return apiCaller('GET', apiEndpoint);
};

export const apiCaller = (method, path, data = {}) => {
  const axiosDefaultSetting = defaultAxiosDefaultSetting(method, path, data);

  return axios(axiosDefaultSetting);
};

const defaultAxiosDefaultSetting = (method, path, data = {}) => {
  let axiosSetting = {
    method: method,
    url: path,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  // Set request parameter or body
  if (method == 'get') {
    axiosSetting.params = data;
  } else {
    axiosSetting.data = data;
  }

  return axiosSetting;
};
