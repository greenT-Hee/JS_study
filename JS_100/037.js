// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
// 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

//입력
//원범 원범 혜원 혜원 혜원 혜원 유진 유진
//출력
//혜원(이)가 총 4표로 반장이 되었습니다.



// 내 답안
const data = prompt('이름을 입력하세요').split(' ');
let count = 0;

for(let i = 0; i < data.length; i++){
    if(data[i] === '혜원'){
        count++;
    }
}
console.log(`혜원(이)가 총 ${count}표로 반장이 되었습니다.`);



//본 해설 
const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for(let index in array){
    let val = array[index];
    result[val] =  result[val] === undefined ? 1 : result[val] + 1; 
}
//{원범: undefined} -->  {원범: 1} --> {원범: 2} --> {원범: 2, 혜원: undefined} --> ....
// console.log(result);
// {원범: 2, 혜원: 4, 유진: 2}

// Object.keys 키값만 배열로 반환
winner = Object.keys(result).reduce((a,b)=>{
    //console.log(a, b)
    return result[a] > result[b] ? a : b;
})

//console.log(winner);
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

