//호준이의 아르바이트
// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

let arr = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

arr.sort((a,b) => {
    return b - a;
})


let set = new Set(arr);
// console.log(set);
// console.log(arr.length);

let 중복 = arr.length- set.size;

let result = 3 + 중복 ;
console.log(result);



