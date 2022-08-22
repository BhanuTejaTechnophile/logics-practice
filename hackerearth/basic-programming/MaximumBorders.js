process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

let getEveryTableMaxBackCells = (table) => {
    return table.map(row => {
        let eachRowBlackCells =  row.map(element => {
            let blackCells = element.match(/[#]+/g);
            return blackCells ? blackCells[0].length : 0;
        });
        return Math.max(...eachRowBlackCells);
    });
};

let formatOutput = (output) => {
    return output.reduce((result, currentValue) => {
        return result + "\n" + currentValue;
    }, "");
}

let formatInput = (input, tableIndex, formatted_input = []) => {
    let inputLines = input.split("\n");
    if(tableIndex >= inputLines.length) {
        return formatted_input;
    }

    let newTable = inputLines[tableIndex];
    let tableRowCount = JSON.parse(newTable.split(" ")[0]);
    let table = inputLines.slice(tableIndex + 1, tableIndex + 1 + tableRowCount);
    formatted_input.push(table);

    return formatInput(input, tableIndex + 1 + tableRowCount, formatted_input);
}

function main() {
    let formatted_input = formatInput(stdin_input, 1);
    let output = getEveryTableMaxBackCells(formatted_input);
    let formatted_output = formatOutput(output);
    process.stdout.write(formatted_output + "\n");
}

process.stdin.on("end", function () {
    main();
});
