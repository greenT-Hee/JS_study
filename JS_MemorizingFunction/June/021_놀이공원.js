// let total = 0;
// let count = 0;
// const limit = prompt("제한 몸무게를 알려주세요");
// const n = prompt("친구가 몇 명인가요?");

// for(let i = 0; i < n; i++){
//     total += parseInt(prompt("몸무게를 알려주세요"),10);
//     if(total <= limit){
//         count = i + 1;
//     }
// }

// console.log(`${count}명만 입장 가능! 🏰`);


// 처음 내가 한 실수
// total과 count는 변수인데 const로 선언해서 계속 오류가 났다.

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);