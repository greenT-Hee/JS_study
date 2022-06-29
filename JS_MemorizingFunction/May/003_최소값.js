function min(array){
    let output = array[0];
    for(const item of array){
        if(output > item){
            output = item;
        }
    }
    return output;
}





const testarray = [57,273,32,103,275,24,57]
console.log(`${testarray} 중에서 `)
console.log(`최솟값은 ${min(testarray)}`)