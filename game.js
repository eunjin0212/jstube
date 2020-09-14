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

for (var word = "제로초"; true; ) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    alert("딩동댕");
    word = answer;
  } else {
    alert("끝말잇기입니다.");
  }
}
