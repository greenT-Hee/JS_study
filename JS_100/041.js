// 소수판독기 

const prime = prompt("숫자를 입력하세요");

function func(n) {
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            console.log("NO");
            return false;
        }
    }
    if(n === 1){
        console.log("NO");
        return false;
    }
    console.log("Yes");
}

func(prime);

// 처음한 실수 
// 1. 함수 실행 명령이 없다. 
// 2. 함수 실행()하면서 인자 값을 prime으로 넣고 함수에서는 n으로 파라마미터로 넣어줘야 했다.

// const prime = prompt("숫자를 입력하세요");

// function func(prime) {
//     for(let i = 2; i < prime; i++){
//         if(prime % i === 0){
//             console.log("NO");
//             return false;
//         }
//     }
//     if(prime === 1){
//         console.log("NO");
//         return false;
//     }
//     console.log("Yes");
// }

