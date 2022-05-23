// product 할당부분은 복붙해놓고 시작~ 
let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];


let lowToHigh = function(){
    products.sort(function(a,b){
        return a.price - b.price;
    })
    console.log(products);
}

lowToHigh();

// a.price -b.price에서 양수가 나오면 b가 왼쪽(앞)으로 이동,
//음수가 나오면 b가 오른쪽으로 이동, 결국 최종 결과에서 가장 왼쪽에 오는 값이 가장 작음