//문제 16번
// 입력 : 거꾸로
// 출력 : 로꾸거


// 내가 적은 방식
let txt = '거꾸로';
let result = '';

for(i = 0; i < txt.length; i++){
    result = txt[i] + result;
}

console.log(result);


//100제 
// let n = prompt('what do you want?');

// let reverse = n.split('').reverse().join('');
// console.log(reverse)