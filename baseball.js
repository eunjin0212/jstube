var body = document.body;
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberArray = [];

function numberFunc() {
  numberArray = [];
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < 4; i += 1) {
    var 뽑은것 = number.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numberArray.push(뽑은것);
  }
}
function numberNew() {
  input.value = "";
  input.focus();
}
numberFunc();
console.log(numberArray);
var resulth1 = document.createElement(`h1`);
document.body.append(resulth1);

var form = document.createElement(`form`);
document.body.append(form);

var input = document.createElement(`input`);
form.append(input);
input.type = `text`;
input.maxLength = 4;

var btn = document.createElement(`button`);
btn.textContent = "입력!";
form.append(btn);
var 틀린횟수 = 0;
form.addEventListener(`submit`, function 비동기(event) {
  event.preventDefault();
  var result = input.value;
  if (result === numberArray.join("")) {
    resulth1.textContent = "홈런";
    numberFunc();
    numberNew();
    틀린횟수 = 0;
  } else {
    var resultArray = result.split("");
    var stlike = 0;
    var ball = 0;
    틀린횟수 += 1;
    if (틀린횟수 > 4) {
      resulth1.textContent =
        "한도초과" + "답은" + numberArray.join(",") + "입니다.";
      numberFunc();
      numberNew();
      틀린횟수 = 0;
    } else {
      console.log(resultArray);
      for (var i = 0; i < 3; i += 1) {
        if (Number(resultArray[i]) === numberArray[i]) {
          stlike += 1;
        } else if (numberArray.indexOf(Number(resultArray[i])) > -1) {
          ball += 1;
        }
      }
      resulth1.textContent = stlike + "스트라이크" + ball + "볼 입니다.";
      numberNew();
    }
  }
});
