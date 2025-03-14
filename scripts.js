// 여유 황금비

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const lines = [];

	for await (const line of rl) {
		lines.push(line.split(' ').map(Number));
	}

	rl.close();

	const T = lines[0][0];
	const testCases = lines.slice(1, T + 1);

	const result = testCases.reduce((acc, cur) => {
		if (cur.length < 2) return acc;

		const [a, b] = cur.sort((x, y) => x - y);

		return (a * 1.6 <= b && a * 1.63 >= b) ? acc + 1 : acc;
	}, 0);

	console.log(result);
	process.exit();
})();