// 제로초님 간단 코드
let level =5;

for(i=1; i <= 5; i++){
    console.log(' '.repeat(level-i) + '❤'.repeat(2*i-1));
}



//인프런 100제 해설
//repeat을 for구문으로 푼 해설이라고 보면 된다.
// 트리를 for구문 안에다 선언해야 초기화가 되어 비정상적으로 '*'이 증가하지 않고 쌓인다.
const level = 5;

for (let i = 1; i <= level; i++){
    let tree = "";
    for (let k = 1; k<=level-i; k++) {
        tree = tree + " "
    }
    for (let j = 1; j <= i*2 -1 ; j++){
        tree = tree + "*"
    }
    console.log(tree)
}