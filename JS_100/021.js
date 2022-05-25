// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

//3번, 5번 (맞춤!)

// set은 Object
// 사용 메서드: add, delete, has, size
// set은 중복을 제거함


//아래는 예시 코드
// let set = new Set()
// set.add(1);
// set.add(1);
// set.add(2);
// set.add(2);
// set.add(3);
// set.add(3);
// set.add(3);
// set.add(3);
// set.size
// // let set = new Set([1, 2, 3, 3, 3, 3])
// // let set = new Set('helllllllllo')