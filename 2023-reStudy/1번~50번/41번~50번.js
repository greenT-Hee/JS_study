// 41번 
// 소수 판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램
// 소수이면 YES로, 소수가 아니면 NO

let count = 0;
const decimal = (n) => {
for(let i = 1; i <= n; i++) {
  if(n%i === 0) {
    count ++
  };
}
if(count === 2) {
  console.log("TRUE")
} else {
  console.log("FALSE")
}
}

decimal(7);


// 42번 
// 2020년 1월 1일 수요일 
