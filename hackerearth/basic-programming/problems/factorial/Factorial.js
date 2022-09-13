const getOutput = (input) => {
  return getFactorial(parseInt(input));
}

const getFactorial = (input, result = input) => {
  let previousNumber = input - 1;
  if(previousNumber == 0) return result;
  return getFactorial(previousNumber, result * previousNumber);
}

module.exports = getOutput;
