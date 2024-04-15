export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const API = "https://jpz-stutz-production.up.railway.app";
// export const API = "http://localhost:5000";