const getOutput = (input) => {
  const formattedInput = input.split("\n")[1];
  if(formattedInput.includes("HH")) return "NO";
  return "YES".concat("\n", formattedInput.replaceAll('.', 'B'));
}

module.exports = getOutput;
