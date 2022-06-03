//한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2


// 내 답안
const n = prompt('숫자를 여러개 나열하세요').split('').join('');

let result = '';
for(let i = 0; i < n.length; i++){
    result = n[i] + result;
}

console.log(result);



