const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static apps
app.use('/', express.static(path.join(__dirname, 'apps')));

// Dummy API endpoint
app.get('/api/ping', (req, res) => {
  res.json({ response: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Testserver draait op http://localhost:${PORT}`);
});
