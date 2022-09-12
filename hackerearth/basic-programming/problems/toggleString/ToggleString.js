const getOutput = (input) => {
  return input.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
}

module.exports = getOutput;
