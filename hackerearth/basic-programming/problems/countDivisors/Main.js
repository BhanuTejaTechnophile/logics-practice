const getOutput = require("./Solution.js");

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

function main(stdin_input) {
  process.stdout.write(getOutput(stdin_input.trim()) + "\n");
}

process.stdin.on("end", function () {
  main(stdin_input);
});
