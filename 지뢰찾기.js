document.querySelector("#exec").addEventListener("click", function () {
  var hor = parseInt(document.querySelector("#hor").value);
  var ver = parseInt(document.querySelector("#ver").value);
  var mine = parseInt(document.querySelector("#mine").value);
  console.log(hor, ver, mine);
  var random = Array(hor * ver)
    .fill()
    .map(function (argu, index) {
      return index;
    });
  var shurple = [];
  while (random.length > 80) {
    var move = random.splice(Math.floor(Math.random() * random.length), 1)[0];
    shurple.push(move);
  }
  console.log(shurple);

  //지뢰 테이블 만들기
  var dataSet = [];
  var tbody = document.querySelector("#table tbody");
  for (var i = 0; i < ver; i += 1) {
    var arr = [];
    var tr = document.createElement("tr");
    dataSet.push(arr);
    for (var j = 0; j < hor; j += 1) {
      arr.push(1);
      var td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  console.log(dataSet);

  //지뢰 심기
  for (var k = 0; k < shurple.length; k++) {
    var 세로 = Math.floor(shurple[k] / 10);
    var 가로 = shurple[k] % 10;
    console.log(세로, 가로);
    tbody.children[세로].children[가로].textContent = "X";
    dataSet[세로][가로] = "X";
  }
  console.log(dataSet);
});
