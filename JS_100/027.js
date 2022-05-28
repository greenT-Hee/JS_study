//  문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고  value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}


// 본 답안 (풀이 실패)
const obj = new  Object();
const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');

for (let i=0; i<obj.length; i++) {
    obj.keys[i] = parseInt(values[i], 10);
}

console.log(obj);



// 본 답안 
const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {} ;

for (let i=0; i<keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
}df

console.log(obj);


// 내가 실수했던 점
// 1. for 구문 안에 keys의 갯수를 기준으로 i의 범위를 정해야 했다. 
// 빈 객체인 obj.length를 사용한 것이 실수!

// 2. 객체 키를 지정할 때 방법이 다름 
// obj.keys[i] -->  obj[keys[i]]
// (.)을 찍는 방법에 키 이름이 공백이나 숫자가 들어가면 error가 나기 때문에 안전하게 [ ] 를 사용해야 한다.