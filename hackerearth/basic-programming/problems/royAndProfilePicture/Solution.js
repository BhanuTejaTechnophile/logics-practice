const getOutput = (input) => {
  const [L, pictures] = format(input);
  return pictures.map(e => e[0] < L || e[1] < L ? "UPLOAD ANOTHER" : e[0] == e[1] ? "ACCEPTED" : "CROP IT").join("\n");
}

const format = (input) => {
  const inputArray = input.split("\n");
  return [parseInt(inputArray[0]), inputArray.slice(2).map(e => e.split(" ").map(Number))];
}

module.exports = getOutput;
