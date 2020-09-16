var body = document.body;
var table = document.createElement(`table`);

var lines = [];
var cans = [];
var turn = "X";
var result = document.createElement(`div`);

var 비동기콜백 = function (event) {
  console.log(event.target); //칸
  console.log(event.target.parentNode); //줄
  console.log(event.target.parentNode.parentNode); //테이블
  var 몇줄 = lines.indexOf(event.target.parentNode);
  console.log("몇줄", 몇줄);
  var 몇칸 = cans[몇줄].indexOf(event.target);
  console.log("몇칸", 몇칸);

  //칸이 이미 채워져 있는가?
  if (cans[몇줄][몇칸].textContent !== "") {
  } else {
    //빈칸이면

    cans[몇줄][몇칸].textContent = turn;
    //세칸 다 채워졌나?
    var full = false;
    //가로줄 검사
    if (
      cans[몇줄][0].textContent === turn &&
      cans[몇줄][1].textContent === turn &&
      cans[몇줄][2].textContent === turn
    ) {
      full = true;
    }
    //세로줄 검사
    if (
      cans[0][몇칸].textContent === turn &&
      cans[1][몇칸].textContent === turn &&
      cans[2][몇칸].textContent === turn
    ) {
      full = true;
    }
    //대각선 검사
    if (몇줄 - 몇칸 === 0) {
      //대각선 검사 필요한 경우
      if (
        cans[0][0].textContent === turn &&
        cans[1][1].textContent === turn &&
        cans[2][2].textContent === turn
      ) {
        full = true;
      }
    }
    if (Math.abs(몇줄 - 몇칸) === 2) {
      //대각선 검사 필요한 경우
      if (
        cans[2][0].textContent === turn &&
        cans[1][1].textContent === turn &&
        cans[0][2].textContent === turn
      ) {
        full = true;
      }
    }
    //다 찼으면
    if (full) {
      result.textContent = turn + "님이 승리!";
      //초기화
      turn = "X";
      cans.forEach(function (line) {
        line.forEach(function (can) {
          can.textContent = "";
        });
      });
    } else {
      //다안찼으면
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
};
for (var i = 1; i <= 3; i += 1) {
  var line = document.createElement(`tr`);
  lines.push(line);
  cans.push([]);
  for (var j = 1; j <= 3; j += 1) {
    var can = document.createElement(`td`);
    can.addEventListener("click", 비동기콜백);
    cans[i - 1].push(can);
    line.appendChild(can);
  }
  table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);
console.log(lines, cans);
