// 울타리 치기

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	const lines = []
	
	for await (const line of rl) {
		lines.push(line.split(' ').map(Number));
	}
	rl.close();

	const N = lines[0][0];
	const testCases = lines.slice(1, N + 1).flat();
	let resutl = testCases[0] + (N * 2);

	for (let i = 0; i < N; i++) {
		if (i === N - 1) {
			resutl += testCases[i];
		} else {
			resutl += Math.abs(testCases[i] - testCases[i+1]);
		}
	}
	
	console.log(resutl);
	
	process.exit();
})();
