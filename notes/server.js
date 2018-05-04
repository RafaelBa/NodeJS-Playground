'use strict';

const express = require('express');

const PORT = 9002;  // TODO should be configurable
const HOST = '0.0.0.0';

const app = express();

app.get('/health', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify(
    {
      status: "OK",
      name: "notes-node"
    }
  ));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
