const getOutput = (input) => {
  // Can this be done using a single regex ? Do NOT look at my code before fixing.
  const x = input.match(/[z]+/g)[0].length;
  const y = input.match(/[o]+/g)[0].length;
  return 2*x == y ? "Yes" : "No";
}

module.exports = getOutput;
