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

	const result = testCases.reduce((acc, cur) => {
		const [number, symbol, num] = cur;
		let result = 0;
		
		switch(symbol) {
			case '+':
				result = Number(number) + Number(num);
			 break;
			case '-':
				result = Number(number) - Number(num);
				 break;
			case '*':
				result = Number(number) * Number(num);
				 break;
			case '/':
				result = (Number(number) / Number(num)) | 0;
				break;
		}
		
		return acc + result;
	}, 0);
	
	console.log(result)
	
	
	process.exit();
})();
