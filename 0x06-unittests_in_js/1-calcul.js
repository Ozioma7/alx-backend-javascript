function calculateNumber(type, a, b) {
  const rounding_a = Math.round(a);
  const rounding_b = Math.round(b);
  
  if (type === 'SUM') {
    return rounding_a + rounding_b;
  }
  if (type === 'SUBTRACT') {
    return rounding_a - rounding_b;
  }
  if (type === 'DIVIDE') {
    if (rounding_b === 0) {
      return 'Error';
    }
    return rounding_a / rounding_b;
  }
}

module.exports = calculateNumber;
