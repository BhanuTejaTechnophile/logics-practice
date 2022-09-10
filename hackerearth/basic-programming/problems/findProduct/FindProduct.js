const getOutput = (input) => {
  const formattedInput = format(input);
  return formattedInput.reduce((result, element) => (result * element) % Math.pow(10, 9) + 7, 1);
}

const format = (input) => {
  return input.split("\n")[1].split(" ").map(element => parseInt(element));
}

module.exports = getOutput;
