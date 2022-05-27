// # 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

const planetsKo = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const planetsEn = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
const n = prompt('태양계 행성 중 하나를 한글로지구 입력하시오.')

for(let i in planetsKo){
    if(n == planetsKo[i]){
        planetsKo[i] == planetsEn[i]; 
        console.log(planetsEn[i]);
    }
}


// 본답안 
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const nameKo = prompt('행성 이름을 말하시오.')
console.log(planets[[nameKo]]);

// 나의 풀의와 다른 점 
// 나는 배열을 직접 만들어서  for in 구문으로 배열의 키값인 인덱스를 뽑아서 식을 세웠다.
// 반면, 본답안은 객체를 만들어 사용했다. 
// 객체가 더 직관적으로 보이기는 하나, 배열로 작성하면 나중에 내용이 추가 되어도 계속 재사용이 가능할 것 같다.

