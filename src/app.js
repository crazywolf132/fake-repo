// Main application file
const express = require('express');
const app = express();
const { requestLogger } = require('./middleware/logging');
const { errorHandler } = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

// Fixed: Using a circular buffer with max size
const CircularBuffer = require('./utils/CircularBuffer');
const requestHistory = new CircularBuffer(1000);

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