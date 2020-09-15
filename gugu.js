var number1 = Math.ceil(Math.random() * 9);
var number2 = Math.ceil(Math.random() * 9);
var result = number1 * number2;

var body = document.body;
var word = document.createElement(`div`);
word.textContent = String(number1) + "곱하기" + String(number2) + "는?";
document.body.append(word);
var form = document.createElement(`form`);
document.body.append(form);
var input = document.createElement(`input`);
input.type = Number;
form.append(input);
var btn = document.createElement(`button`);
btn.textContent = "입력!";
form.append(btn);
var 결과창 = document.createElement(`div`);
document.body.append(결과창);

form.addEventListener(`submit`, function callback(event) {
  event.preventDefault();
  console.log(result, input.value);
  if (result === Number(input.value)) {
    결과창.textContent = "딩동댕";
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    result = number1 * number2;
    word.textContent = String(number1) + "곱하기" + String(number2) + "는?";
    input.value = "";
    input.focus();
  } else {
    결과창.textContent = "땡땡땡!!!바부야";
    input.value = "";
    input.focus();
  }
});
// while (true) {
//   var 숫자1 = Math.floor(Math.random() * 9) + 1;
//   var 숫자2 = Math.floor(Math.random() * 9) + 1;
//   var 결과 = 숫자1 * 숫자2;
//   var 조건 = true;
//   while (조건) {
//     var 답 = prompt(String(숫자1) + "곱하기" + String(숫자2) + "는?");
//     if (결과 === Number(답)) {
//       alert("딩동댕");
//       조건 = false;
//     } else {
//       alert("땡");
//     }
//   }
// }
