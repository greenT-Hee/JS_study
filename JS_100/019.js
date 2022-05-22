// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 나의 풀이
function pow(a,b){
    return Math.pow(a,b);
}
console.log(pow(2,8));

//정답 
const n = prompt('수를 입력하세요.').split(' ');
//split을 사용하면 배열로 만들어지기 때문에 인덱스로 뽑아낸다. 
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
//parseInt(값, 10진수)