var word = "제로초";
while (true) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
  } else {
    alert("끝말잇기입니다.");
  }
}
