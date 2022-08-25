const getOutput = (input) => {
  // This can be improved. Do NOT look at my code before improving.
  const numbers = input.split("\n")[1];
  return parseInt(numbers[numbers.length - 1]) == 0 ? "Yes" : "No";
}

module.exports = getOutput;
