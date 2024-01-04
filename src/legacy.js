// Legacy code - needs refactoring
function oldFunction(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      result.push(data[i]);
    }
  }
  return result;
}

module.exports = { oldFunction };