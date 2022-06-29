let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];


function isNmae(name){
    for(let i = 0; i < 출석부.length; i++){
        if(name === 출석부[i]){
            console.log("있어요!");
            return;
        }
    }
}

isNmae("영희")