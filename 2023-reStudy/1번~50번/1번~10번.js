// 1번) 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

// 1번 풀이)
nums.splice(3,4);
console.log(nums)

// 2번) <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

var arr = [200, 100, 300];
//pass

//출력
//[200, 100, 10000, 300]

// 2번 풀이)
arr.splice(2,0, 10000)
console.log(arr)

// 9번) 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';


let result = year.concat("/",month,"/" ,day," " ,hour,":",minute,":",second)


console.log(result);

// 출력 2019/04/26 11:34:27


//10번) 별 트리 만들기
let 입력 = 5;
let tree = "";

for(let i = 1; i < 5; i++) {
  입력--; 
  tree='';
  for(let j = 0; j < 입력; j++) {
    tree += " "
  }
  for(let k = 0; k < i*2-1; k++) {
    tree += "*" ;
  }
  console.log(tree)
}
