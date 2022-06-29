const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function checkDay(a,b){
    const theDay = new Date(`2022-${a}-${b}`);
    console.log(day[theDay.getDay()])
}

checkDay(3,22)