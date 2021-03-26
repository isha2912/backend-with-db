const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const appRoot = require('app-root-path');
const { healthRouter, testRouter } = require('./src/routes');

if (process.env.NODE_APP_ENV === 'local') {
  // const pathRoot = `${appRoot}/`;
  // console.log("HEYYYYY", appRoot.path+`${process.env.NODE_APP_ENV}.env`);
  dotenv.config({
    path: path.resolve(appRoot.path, `${process.env.NODE_APP_ENV}.env`),
  });
} else dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use('/health', healthRouter);
app.use('/test', testRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
