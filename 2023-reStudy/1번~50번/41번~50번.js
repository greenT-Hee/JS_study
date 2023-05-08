// 42번 
// getDay: sunday~saturday == 0~6 
function solution (month, day) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const x = new Date('2020-' + month + "-" + day);
  return days[x.getDay()];
}

console.log("42번: ", solution(3,22))

// 43번 
let b = [];
let result = '';
function binary (num) {
  while (num){
    b.push(num % 2);
    num = parseInt(num / 2, 10);
  }
  b.reverse();
  b.forEach(item => {
    result += item;
  })
  return result
}

console.log("43번: ", binary(15));

// 44번 
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
// 예를 들어, 18234 = 1+8+2+3+4 
// let numsArr = [];
let result44 = 0;
function addnums (num) {
  const arr = num.toString().split('');
  arr.forEach(item => {
    result44 += parseInt(item, 10);
  })
  return result44;
}

console.log("44번: ", addnums(3849))
