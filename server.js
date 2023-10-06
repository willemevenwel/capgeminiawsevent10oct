'use strict';

const express = require('express');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello Capgemini AWS Community Event 10 October 2023 - ${process.env.ENVIRONMENT}`);
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});