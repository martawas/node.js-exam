const axios = require("axios");

const getUser = async (userName) => {
  const url = `https://api.github.com/users/${userName}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = getUser;
