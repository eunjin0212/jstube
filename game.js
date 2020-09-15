// var word = "제로초";
// while (true) {
//   var answer = prompt(word);
//   if (word[word.length - 1] === answer[0]) {
//     alert("딩동댕");
//     word = answer;
//   } else {
//     alert("끝말잇기입니다.");
//   }
// }
var body = document.body;
var word = document.createElement(`div`);
word.textContent = "제로초";
document.body.append(word);
var form = document.createElement(`form`);
document.body.append(form);
var input = document.createElement(`input`);
form.append(input);
var btn = document.createElement(`button`);
btn.textContent = "입력!";
form.append(btn);
var result = document.createElement(`div`);
document.body.append(result);

form.addEventListener("submit", function callback(event) {
  event.preventDefault();
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    result.textContent = "딩동댕";
    word.textContent = input.value;
    input.value = "";
    input.focus();
  } else {
    result.textContent = "땡땡땡!!!";
    input.value = "";
    input.focus();
  }
});
// for (var word = "제로초"; true; ) {
//   var answer = prompt(word);
//   if (word[word.length - 1] === answer[0]) {
//     alert("딩동댕");
//     word = answer;
//   } else {
//     alert("끝말잇기입니다.");
//   }
// }
