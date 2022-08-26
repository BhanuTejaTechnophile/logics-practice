process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
	stdin_input += input;
});

const getInlineCellCount = (table) => {
	return table.map(row => {
		const blackCells = row.match(/[#]+/g);
		return blackCells ? blackCells[0].length : 0;
	});
}

const getMaxBorders = (tables) => {
	return tables.map(table => Math.max(...getInlineCellCount(table)));
};

const formatInput = (input, tableIndex) => {
	const inputLines = input.trim().split("\n");
	const table = [];
	let index = tableIndex;
	
	while(index < inputLines.length) {
		const newTable = inputLines[index];
		const tableRowCount = parseInt(newTable.split(" ")[0]);
		const tableBegining = index + 1;
		const tableEnd = tableBegining + tableRowCount;
		table.push(inputLines.slice(tableBegining, tableEnd));
		index = tableEnd;
	}
	return table;
}

function main(stdin_input) {
	const formatted_input = formatInput(stdin_input, 1);
	const output = getMaxBorders(formatted_input);
	process.stdout.write(output.join("\n") + "\n");
}

process.stdin.on("end", function () {
	main(stdin_input);
});
