// Database connection module
const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/testdb';

async function connect() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

async function disconnect() {
  await mongoose.disconnect();
}

module.exports = {
  connect,
  disconnect,
  mongoose
};