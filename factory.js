var 프로토타입 = {
    type: "card",
    attack: function () {},
    defend: function () {},
};
//Object.create(프로토타입)
function cardFactory(name, att, hp) {
  var card = Object.create(프로토타입);
    card.name= name,
    card.att= att,
    card.hp= hp,
  //card.__proto__ = 프로토타입
  return card;
}

const card = cardFactory("eunjin", 10, 10);

// console.log(card);

const card2 = cardFactory("무지", 15, 15);
// console.log(card2);

const protoType = {
  type: "card",
  attack: function () {},
  defend: function () {},
};
const card3 = {
  name: "eunjin",
  att: 10,
  hp: 10,
};
card3.prototype = protoType;
// console.log(card3);
__proto__는 생략 가능 --> 실무에서는 쓰지 말 것!!!!
대신에 Object.create 쓰기 
prototype을 쓰는 이유 css랑 비슷함 한방에 바꿀 수 있기 때문에
// console.log(card3.prototype);
