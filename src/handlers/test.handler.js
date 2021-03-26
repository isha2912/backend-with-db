// const authService = require('../services/auth.service');

const testHandler = (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];
  try {
    res.status(200).send('hey');
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  testHandler,
};
