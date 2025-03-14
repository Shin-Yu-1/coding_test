// 운동 중독 플레이어

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({
		input: process.stdin,
    output: process.stdout,
	});
	
	rl.on('line', (line) => {
		[W, R] = line.split(' ').map(Number);

    rl.close();

		const result = (W * ( 1 + R / 30 )) | 0

		console.log(result);
	}).on('close', () => {});
})();