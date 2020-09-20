// var 프로토타입 = {
//     type: "card",
//     attack: function () {},
//     defend: function () {},
// };
// //Object.create(프로토타입)
// function cardFactory(name, att, hp) {
//   var card = Object.create(프로토타입);
//     card.name= name,
//     card.att= att,
//     card.hp= hp,
//   //card.__proto__ = 프로토타입
//   return card;
// }

// const card = cardFactory("eunjin", 10, 10);

// // console.log(card);

// const card2 = cardFactory("무지", 15, 15);
// // console.log(card2);

// const protoType = {
//   type: "card",
//   attack: function () {},
//   defend: function () {},
// };
// const card3 = {
//   name: "eunjin",
//   att: 10,
//   hp: 10,
// };
// card3.prototype = protoType;
// // console.log(card3);
// __proto__는 생략 가능 --> 실무에서는 쓰지 말 것!!!!
// 대신에 Object.create 쓰기
// prototype을 쓰는 이유 css랑 비슷함 한방에 바꿀 수 있기 때문에
// // console.log(card3.prototype);

````
call by value (콜바이벨류)
--> 자바스크립트의 동작들
call by reference(콜바이레퍼런스)
--> 자바스크립트에 존재하지 않는다
````
function 함수 (매개변수){
    console.log(매개변수);
}
함수(5)
var 인자 = 5;
함수(인자);
console.log(인자);

````
function 함수 (매개변수){
    매개변수 = 10;
    console.log(매개변수);
}

var 인자 = 5;
함수(인자);
console.log(인자);

````
function 함수 (매개변수){ //4. 매개변수 = {a:5}가 됨
    매개변수.a = 10; //5. 매개변수 객체 안에 a를 10으로 바꿈
    console.log(매개변수); //6. 매개변수는 {a:10} --> {a:10} 
}

var 인자 = { a : 5 }; //2.객체를 넣었다 a:5 
함수(인자); //3. 함수를 호출한다
console.log(인자); //1. 인자를 찾는다 --> 위 함수의 매개변수가 바뀌었기 때문에 {a:10}
//객제를 대입하면 참조관계가 됨 참조 관계는 하나를 바꾸면 같이 바뀜 끊기지가 않음
````
call by reference(콜바이레퍼런스)가 아닌 이유 
function 함수 (매개변수){
    매개변수 = 8;
    console.log(매개변수);
}

var 인자 = { a : 5 };
함수(인자);
console.log(인자); --> { a : 5 }
//객체의 속성을 바꾸는 것만 참조가 되어 같이 바뀜 
//객체 자체를 수정할때는 참조관계가 깨짐
````