const getOutput = (input) => parseInt(input[input.trim().length - 1]) == 0 ? "Yes" : "No";

module.exports = getOutput;
