// Utility functions

function formatDate(date) {
  // Modified format for user-friendly display
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
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