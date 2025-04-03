// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const arr = [];
	
	for await (const line of rl) {
		arr.push(line.split(' '));
		rl.close();
	}

	const T = Number(arr[0]) > 100000 ? 100000 : Number(arr[0]);
	const alice = arr[1].map(Number);
	const bob = arr[2].map(Number);
	let alicePoint = 0;
	let bobPoint = 0;

	for (let i = 0; i < T; i++) {
		const aliceATK = alice[i];
		const bobATK = bob[i];
		
		if (aliceATK === bobATK) {
			alicePoint++;
			bobPoint++;
		} else if (aliceATK > bobATK) {
			if (aliceATK - bobATK === 7) {
				alicePoint -= 1;
				bobPoint += 3;
			} else {
				alicePoint += 2;
			}
		} else {
			if (bobATK - aliceATK === 7) {
				bobPoint -= 1;
				alicePoint += 3;
			} else {
				bobPoint += 2;
			}
		}
	}
	
	console.log(`${alicePoint} ${bobPoint}`);
	
	process.exit();
})();
