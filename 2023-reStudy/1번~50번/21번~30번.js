// 24번
// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 입력 : mary
// 출력 : MARY

// const n = prompt('이름을 입력해주세요.');
// console.log(n.toUpperCase());


// 26번 
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

const english = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const korean = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

const translage = (text) => {
  const point = korean.indexOf(text);
  console.log(english[point]);
  
}
translage("해왕성");


// 27번 
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

class MathScore {
  constructor (name, score) {
    this.name = name;
    this.score = score;
  }

  print () {
    console.log('hello')
  }
}

let 유진 = new MathScore("Yujin", 70);
let 희연 = new MathScore("Hyewon", 100);

// console.log(유진)

// const keys = prompt('이름을 입력하세요').split(' '); // [유진,희연]
// const values = prompt('점수를 입력하세요').split(' '); // [70,100]
// const obj = {};

// for (let i=0; i<keys.length; i++) {
//   obj[keys[i]] = parseInt(values[i], 10);
// }

// console.log(obj);

// 28번 
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

// 입력
// Javascript
// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

let text = 'Javascript';
let textArr = text.split('');

for(let i = 0; i < textArr.length - 1; i++) {
  console.log(textArr[i], textArr[i+1])
}

// 29번 
// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

const checkUpperCase = (text) => {
  if(text === text.toUpperCase()) {
    console.log("YES")
  } else {
    console.log("NO")
  }
}

checkUpperCase("p");

// 30번 
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요


function whereAreU (sentence, word) {
  if(sentence.indexOf(word) > -1) {
    console.log(sentence.indexOf(word))
  } else {
    console.log("집 잘못 찾아옴 🚀")
  }
}

whereAreU("pineapple is yummy", "apple")