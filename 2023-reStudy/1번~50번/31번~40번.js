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
  function two(m){
    const sq = Math.pow(m,n);
    return sq
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a) // a 자체가 two 함수

console.log(a(10));
console.log(b(10));
console.log(c(10));


// 36번 
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

const calculate = (n) => {
  let answer = ''
  for(let i = 1; i < 10; i++) {
    answer += n * i + " ";
  }
  console.log(answer)
}

calculate(9);


// 37번 반장선거 
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진
// 혜원(이)가 총 4표로 반장이 되었습니다.
// 반복문을 돌려서 앞의 값과 같으면 값을 누적, 다르면 반복문 끝나고 새 시작

// const n = prompt('투표해주세요 🗳️');
// const numArr = [];
// const nameArr = n.split(' ');
// const nameList = new Set(nameArr); // 원범 혜원 유진

// let num = 1;
// let votedName = ""

// for(let i = 0; i < nameArr.length; i++) {
//   if(nameArr[i + 1] === nameArr [i]) {
//     num++;
//   } else {
//     numArr.push(num);
//     num = 1;
    
//   }
// }

// const MAX_VOTE = Math.max.apply(null, numArr);
// // votedName = nameList[numArr.indexOf(MAX_VOTE)]
// let 이름배열 = [];
// nameList.forEach((name) => {
//   console.log(name);
//   이름배열.push(name);
//   console.log(이름배열);
//   votedName = 이름배열[numArr.indexOf(MAX_VOTE)]
// })

// alert(`${votedName}(이)가 총 ${MAX_VOTE}표로 반장이 되었습니다.`);

// 40번 
// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
// 첫번째 입력으로 제한 무게, 두번째 입력으로는 함께한 친구들의 수 n, 
//그 다음 차례대로 탑승할 친구들의 몸무게, 그 다음 몸무게는 무작위
// 한 번 타는 인원 수 제한은 없지만 제한 무게를 넘으면 무조건 다음 기구 타야 한다.
let total = 0;
let count = 0;
const limit = 50;
const n = 5;
const weight = [20,20,20,20,20]

for (let i=1; i<=n; i++){
  total += weight[i];
  if (total <= limit){
		count = i;
  }
}

console.log(count);