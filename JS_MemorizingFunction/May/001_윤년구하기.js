//윤년구하기
//윤년: 2월이 29일 때
//  4로 나누어 떨어지고(and), 1) 100으로 나누어 떨어지지 않으나(or) 400으로 떨어짐

//실시간 암기 코드
// 다시 녹화 

function isLeapYear(year){
    return (year % 4 === 0) && ((year % 100 !==0) || (year % 400 ===0));
}

console.log(`2020년은 윤년이냐? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년이냐? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년이냐? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년이냐? === ${isLeapYear(1900)}`);