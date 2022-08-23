process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

const getInlineCells = (table) => {
    return table.map(row => {
        const blackCells = row.match(/[#]+/g);
        return blackCells ? blackCells[0].length : 0;
    });
}

const getMaxBorders = (tables) => {
    return tables.map(table => {
        return Math.max(...getInlineCells(table));
    });
};

const formatInput = (input, tableIndex, result = []) => {
    const inputLines = input.split("\n");
    if(tableIndex >= inputLines.length) {
        return result;
    }

    const newTable = inputLines[tableIndex];
    const tableRowCount = parseInt(newTable.split(" ")[0]);
    const tableBegining = tableIndex + 1;
    const tableEnd = tableBegining + tableRowCount;
    const table = inputLines.slice(tableBegining, tableEnd);
    const formatted_input = [...result, table];
    return formatInput(input, tableEnd, formatted_input);
}

function main() {
    const formatted_input = formatInput(stdin_input, 1);
    const output = getMaxBorders(formatted_input);
    process.stdout.write(output.join("\n") + "\n");
}

process.stdin.on("end", function () {
    main();
});
