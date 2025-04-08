// 백준 #2503

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let result = 0;

rl.on("line", (line) => {
  input.push(line.trim().split(" "));
}).on("close", () => {
  const testCounts = Number(input[0]);
  const hint = input.slice(1);

  for (let h = 1; h < 10; h++) {
    for (let t = 1; t < 10; t++) {
      for (let o = 1; o < 10; o++) {
        if (h === t || h === o || t === o) continue; // 중복된 숫자 제외
        let count = 0;
        const number = `${h}${t}${o}`;
        for (let i = 0; i < testCounts; i++) {
          const [value, strike, ball] = hint[i].map(Number);
          const valueArr = value.toString().split("");
          let strikeCount = 0;
          let ballCount = 0;

          for (let j = 0; j < 3; j++) {
            if (valueArr[j] === number[j]) {
              strikeCount++;
            } else if (number.includes(valueArr[j])) {
              ballCount++;
            }
          }

          if (strikeCount === strike && ballCount === ball) {
            count++;
          }
        }
        if (count === testCounts) {
          result++;
        }
      }
    }
  }

  console.log(result);
  process.exit();
});
