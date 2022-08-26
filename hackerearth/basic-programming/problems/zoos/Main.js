const getOutput = require("./Zoos.js"); // Why not use modules ? Ex: import instead of require

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

function main(stdin_input) {
  process.stdout.write(getOutput(stdin_input) + "\n");
}

process.stdin.on("end", function () {
    // why calling main and main calling getOutput function ? Why not inline getOutput here itself ?
  main(stdin_input);
});
