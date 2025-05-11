

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Eurt PWA Server is online!');
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});