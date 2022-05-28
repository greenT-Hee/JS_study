// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0



//나의 풀이
const input = prompt('몫이 5가 되도록 숫자 두 개를 입력해주세요.').split(' '); //[20,4]

function 나누기(a,b){
    console.log(a / b);
    console.log(a % b);20 
}

나누기(input[0],input[1]);



//정답 해설
// const n = prompt('수를 입력하세요.').split(' ');

// //floor는 보다 작은 정수로 반환하여 소수점을 없애는 메소드
// //parseInt(값,진수) --> 원하는 진수인 정수로 만들기
// const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
// const left = parseInt(n[0], 10) % parseInt(n[1], 10);
// console.log(result, left);

