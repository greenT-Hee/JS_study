//🐔 => 🔥 =>🍗

const getHen = () => new Promise((resolve,reject)=> {
    setTimeout(()=> resolve(`🐔`),500);
})

const getFire = hen => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${hen}=> 🔥 `),500);
})

const cook = fire => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${fire} => 🍗`),500);
})

getHen()
    .then(hen => getFire(hen))
    .then(fire => cook(fire))
    .then(eat => console.log(eat))