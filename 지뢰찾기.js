var tbody = document.querySelector("#table tbody");
var dataSet = [];
document.querySelector("#exec").addEventListener("click", function () {
  tbody.innerHTML = "";
  var hor = parseInt(document.querySelector("#hor").value);
  var ver = parseInt(document.querySelector("#ver").value);
  var mine = parseInt(document.querySelector("#mine").value);
  console.log(hor, ver, mine);

  //지뢰 위치 뽑기
  var 후보 = Array(hor * ver)
    .fill()
    .map(function (argu, index) {
      return index;
    });
  var shurple = [];
  while (후보.length > 80) {
    var move = 후보.splice(Math.floor(Math.random() * 후보.length), 1)[0];
    shurple.push(move);
  }
  console.log(shurple);

  //지뢰 테이블 만들기
  for (var i = 0; i < ver; i += 1) {
    var arr = [];
    var tr = document.createElement("tr");
    dataSet.push(arr);
    for (var j = 0; j < hor; j += 1) {
      arr.push(1);
      var td = document.createElement("td");
      td.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var can = Array.prototype.indexOf.call(
          부모tr.children,
          e.currentTarget
        );
        var line = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        if (
          e.currentTarget.textContent === "" ||
          e.currentTarget.textContent === "X"
        ) {
          e.currentTarget.textContent = "!";
        } else if (e.currentTarget.textContent === "!") {
          e.currentTarget.textContent = "?";
        } else if (e.currentTarget.textContent === "?") {
          e.currentTarget.textContent = "";
          if (dataSet[line][can] === "1") {
            e.currentTarget.textContent = "";
          } else if (dataSet[line][can] === "X") {
            e.currentTarget.textContent = "X";
          }
        }
      });
      td.addEventListener("click", function (e) {
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var can = Array.prototype.indexOf.call(
          부모tr.children,
          e.currentTarget
        );
        var line = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        if (dataSet[line][can] === "X") {
          e.currentTarget.textContent = "펑";
        } else {
          var 주변 = [dataSet[line][can - 1], dataSet[line][can + 1]];
          if (dataSet[line - 1]) {
            주변 = 주변.concat([
              dataSet[line - 1][can - 1],
              dataSet[line - 1][can],
              dataSet[line - 1][can + 1],
            ]);
          }
          if (dataSet[line + 1]) {
            주변 = 주변.concat([
              dataSet[line + 1][can - 1],
              dataSet[line + 1][can],
              dataSet[line + 1][can + 1],
            ]);
          }
          e.currentTarget.textContent = 주변.filter(function (v) {
            return v === "X";
          }).length;
        }
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  //지뢰 심기
  for (var k = 0; k < shurple.length; k += 1) {
    var 세로 = Math.floor(shurple[k] / 10);
    var 가로 = shurple[k] % 10;
    console.log(세로, 가로);
    tbody.children[세로].children[가로].textContent = "X";
    dataSet[세로][가로] = "X";
  }
  console.log(dataSet);
});
