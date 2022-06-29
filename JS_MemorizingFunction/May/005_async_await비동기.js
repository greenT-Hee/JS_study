// async와 await을 이용한 비동기 

setTimeout(()=>{
    console.log('5초 끝')
},5000)

function cook(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const myCake = async() => {
    await cook(5000);
    return 'cake';
}

const myCookies = async() => {
    await cook(5000);
    return 'cookies';
}

const myCoffee = async() => {
    await cook(5000);
    return '아메리카노';
}

async function run(){
    const result = await Promise.all([myCake(),myCoffee(),myCookies()]);
    console.log(result);
}

run();






