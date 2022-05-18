function sum(a,b){
    let result =0;
    for(i=a; i<=b; i++){
        result += i;
    }
    return result;
}

console.log(`1부터 100까지 합 = ${sum(1,100)}`)