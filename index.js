const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const arr = [];
	
	for await (const line of rl) {
		arr.push(line.split(' '));
		rl.close();
	}

	const T = arr[0];
	const testCases = arr.slice(1, T + 1);
	
	testCases.sort((a, b) => Number(a[1]) - Number(b[1]));

	const [lowItem, lowCost] = testCases[0];
	const [highItem, highCost] = testCases[testCases.length - 1];

	console.log(`${highItem} ${highCost}\n${lowItem} ${lowCost}`);

	process.exit();
})();
