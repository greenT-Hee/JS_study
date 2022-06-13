// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

const word = prompt('문장을 입력하세요');

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
 }
 
 console.log(replaceAll(word,"q","e"));