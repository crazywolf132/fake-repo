// Utility functions

function formatDate(date) {
  return new Date(date).toISOString();
}

function calculateSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

module.exports = {
  formatDate,
  calculateSum,
  validateEmail
};