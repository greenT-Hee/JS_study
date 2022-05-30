//  # 문제28 : 2-gram
// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// **입력**
// Javascript
// **출력**
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t
// ```
// 입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요. 



// 내 풀이 -> for...of로 풀지 못함
// 여러가지 시도 끝에 찾은 이유는 i값에 +1이 적용되 않는다는 점이다. 
// 천천히 생각해보니, for...of의 i는 여기서 prompt에 찍히는 string의 value를 반환한다. 그렇다보니 내가 i+1이라고 적어서 당연하게 '문자+1'이 되버렸기 때문이다.
const n = prompt('원하는 문자 입력');

for(let i of n){
    console.log(i, i+1 );
} 
// "j" "j1"
// "a" "a1"
// "v" "v1"
// "a" "a1"



// 본답안 
const n = prompt('원하는 문자열을 말해봐');
for(let i = 0; i < n.length; i++){
    console.log(n[i], n[i+1]);
}

// 일반 for 구문으로 풀이했을 경우에는 [i+1]이 된다.