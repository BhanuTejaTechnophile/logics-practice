const getOutput = (input) => {
  const [i, k, r] = format(input);
  let count = 0;
  for(let index = i; index <= k; index++) {
    if(index%r == 0) count++;
  }
  return count;
}

const format = (input) => {
  return input.split(" ").map(element => parseInt(element));
}

module.exports = getOutput;
