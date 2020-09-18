function cardFactory(name, att, hp) {
  return {
    name: name,
    att: att,
    hp: hp,
    type: "card",
    attack: function () {},
    defend: function () {},
  };
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
//__proto__는 생략 가능
//prototype을 쓰는 이유 css랑 비슷함 한방에 바꿀 수 있기 때문에
console.log(card3.prototype);