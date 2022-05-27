// 앞뒤 숫자의 차가 가장 큰 숫자의 쌍을 구해라.

let s  = [1, 3, 4, 8, 13, 17, 20];

const zip = (a,b) => a.map((v,i)=>[v,b[i]]);
let pairs = zip(s.slice(0,s.length-1),s.slice(1));

let init = pairs[0][1] - pairs[0][1];

let result = [];

for(let i of pairs){
    if(init < i[1]-i[0]){
        init = i[1]-i[0];
        result = i;
    }
}

console.log(result);