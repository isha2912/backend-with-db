const axios = require('axios').default;
const dotenv = require('dotenv');
const appRoot = require('app-root-path');
const path = require('path');

if (process.env.NODE_APP_ENV === 'local') {
  // const pathRoot = `${appRoot}/`;
  // console.log("HEYYYYY", appRoot.path+`${process.env.NODE_APP_ENV}.env`);
  dotenv.config({
    path: path.resolve(appRoot.path, `${process.env.NODE_APP_ENV}.env`),
  });
} else dotenv.config();

const verifyToken = async (token) => {
  const response = await axios.post(`http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/validateToken`, {}, {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

module.exports = { verifyToken };
