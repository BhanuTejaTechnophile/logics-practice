const getOutput = (input) => {
  const x = input.match(/[z]+/g)[0].length;
  const y = input.match(/[o]+/g)[0].length;
  return 2*x == y ? "Yes" : "No";
}

module.exports = getOutput;
