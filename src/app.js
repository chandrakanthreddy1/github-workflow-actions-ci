const express = require('express');
const app = express();
const port = 3000;

// Simple endpoint
app.get('/', (req, res) => {
  res.send('Hello World! Version 4');
});

// Another endpoint to test changes
app.get('/ping', (req, res) => {
  res.json({ message: "pong" });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});