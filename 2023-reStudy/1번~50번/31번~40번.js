// 배열 내장함수 시간 복잡도 
// 32번 
// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
// 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5

// let n = prompt('문장을 입력해주세요');

// let wordBreak = n.split(' ');
// console.log(wordBreak.length);

// 33번 
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오. 
// 12345
// 54321

function ToObj (num) {
  this.num = num;
}
const obj = new ToObj(54321);

ToObj.prototype.toString = function toString () {
  return `${this.num}`
}

console.log(obj.toString().split('').reverse().join(',').replaceAll(/,/ig,''));


// 34번 
// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램
// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

const heights = (num) => {
  const sorted = num.split(' ').sort().join(',').replaceAll(/,/ig,' ');

  if(num === sorted) {
    console.log('YES');
  } else {
    console.log('NO')
  }
}

heights("155 156 165 166 169 176");


// 35번 
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n){
  console.log(n)
  function two(){
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));