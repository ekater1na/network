/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 8000;

app.get('/api', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
  res.json({ ok: true });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
