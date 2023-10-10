'use strict';

const express = require('express');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
  let msg = `Hello Capgemini AWS Community Event 10 October 2023<br/>Environment: ${process.env.ENVIRONMENT}<br/>Email credits per day: ${process.env.EMAIL_CREDITS}`
  console.log(msg);
  res.send(msg);
});
 
app.listen(PORT, HOST, () => {
  console.log(`Iteration: 61`);
  console.log(`Running on http://${HOST}:${PORT}`);
  console.log(`Hello Capgemini AWS Community Event 10 October 2023`);
  console.log(`Environment: ${process.env.ENVIRONMENT}`);
  console.log(`Email credits per day: ${process.env.EMAIL_CREDITS}`);
});