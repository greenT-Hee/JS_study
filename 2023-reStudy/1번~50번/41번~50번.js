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
// 2020년 2월은 윤년 (2월 29일)
function solution (a, b) {
  const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const x = new Date(2020 + "-" + a + "-" + b);
  return day[x.getDay()]
}

console.log(solution(3, 22));

// 43번 
// 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력
function binaryNumber(number) {
  console.log("10진수", number);
  let 이진수 = 0;
  arr.forEach(item => {
    
  });
}

binaryNumber(7536);