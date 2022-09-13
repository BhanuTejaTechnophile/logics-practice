const getOutput = (input) => {
  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  const consecutiveSum = [];
  consecutiveSum.push(parseInt(input[0]) + parseInt(input[1]));
  consecutiveSum.push(parseInt(input[3]) + parseInt(input[4]));
  consecutiveSum.push(parseInt(input[4]) + parseInt(input[5]));
  consecutiveSum.push(parseInt(input[7]) + parseInt(input[8]));
  return consecutiveSum.every(isEven) && !vowels.includes(input[2]) ? "valid" : "invalid";
}

const isEven = element => element%2 == 0;

module.exports = getOutput;
