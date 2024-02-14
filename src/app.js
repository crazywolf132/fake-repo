// Main application file
const express = require('express');
const app = express();
const { requestLogger } = require('./middleware/logging');
const { errorHandler } = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

// Global array that was causing memory leak
let requestHistory = [];

app.get('/', (req, res) => {
  res.send('Welcome to our API!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;