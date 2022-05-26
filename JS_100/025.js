// 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.


// 답안 제출
함수를 사용하라는 부분을 놓침! 똑바로 읽기
const n = prompt('반지름의 길이를 알려주세요');
console.log(Math.PI * parseInt((n ** 2),10));


//안보고 다시 푼 함수 

function circle(n){
    return Math.PI * parseInt((n ** 2),10)
}

console.log(circle(5));


// 본답안
// 내 풀이와 다른 점은 반지름을 r로 변수를 선언하여 promt로 받았다는 점이다.
// promt를 사용하면 더 쉽게 숫자를 수정할 수 있을 것 같다.
function circle(n) {
    const result = n * n * 3.14;
  
    return result;
  }
  
  const r = prompt("원의 반지름을 입력하세요.");
  console.log(circle(r));