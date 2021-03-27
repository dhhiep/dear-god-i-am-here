// Get data from client local storage
export const load = (key) => {
  try {
    let dataString = localStorage.getItem(key);

    return JSON.parse(dataString);
  } catch {
    return {};
  }
};

// Store data to client local storage
export const store = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
