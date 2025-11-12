import axios from "axios";

const commonAPI = async (url, method, body) => {
  try {
    const config = {
      method,
      url,
      data: body
    };
    const response = await axios(config);
    return response;
  } catch (err) {
    return err.response || err;
  }
};

export default commonAPI;