// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)
// 입력 : 176 156 155 165 166 169
// 출력 : NO
// 입력 : 155 156 165 166 169 176
// 출력 : YES



// 내 답안 ()
const n = prompt('키를 나열하세요').split(' ')

// 오름차순 정렬하기
let k = n.sort(function height(a,b){
    return a - b;
})


function result(){
    if(n === k){
        console.log('YES');
    }else{
        console.log('NO');
    }
}

result();


// 본단압
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}

// 내가 실수한 부분
// .join(' ')을 하지 않았기 때문이다. 
// split까지 하면 배열로 정리되는 반면에 promt 값으로 받아 오는 값은 공백으로 띄어진 string이다. 

// 정리하자면 
// 1. promt로 받아온 값을 split으로 배열을 만든 후, 
// 2. sort 함수로 베열을 정렬하고
// 3. join으로 공백으로 이어진 하나의 string을 만들어서 조건문으로 완성
