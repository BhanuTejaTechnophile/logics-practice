const getOutput = (input) => {
  const formattedInput = input.split("\n").map(Number);
  return formattedInput.slice(0, formattedInput.indexOf(42)).join("\n");
}

module.exports = getOutput;
