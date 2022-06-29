const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for(let i in arr){
    let val = arr[i];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}

winner = Object.keys(result).reduce((a,b) => {
    return result[a] > result[b] ? a : b;
})

console.log(`${winner}가 총 ${result[winner]}표로 당선됐습니다.`)