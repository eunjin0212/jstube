var body = document.body;
var table = document.createElement(`table`);
var lines = [];
var cans = [];
var turn = "X";
var 결과 = document.createElement(`div`);

function resultCheck(몇줄, 몇칸) {
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
  if (
    cans[0][0].textContent === turn &&
    cans[1][1].textContent === turn &&
    cans[2][2].textContent === turn
  ) {
    full = true;
  }
  if (
    cans[2][0].textContent === turn &&
    cans[1][1].textContent === turn &&
    cans[0][2].textContent === turn
  ) {
    full = true;
  }
  return full;
}
function reset(무승부) {
  //초기화
  if (무승부) {
    결과.textContent = "무승부";
  } else {
    //승부
    결과.textContent = turn + "님이 승리!";
  }
  setTimeout(function () {
    결과.textContent = "";
    cans.forEach(function (line) {
      line.forEach(function (can) {
        can.textContent = "";
      });
    });
    turn = "X";
  }, 1000);
}

var 비동기콜백 = function (event) {
  //칸을 클릭했을때
  if (turn === "O") {
    //컴퓨터의 턴일 때 내가 클릿하지 않도록
    return;
  }
  var 몇줄 = lines.indexOf(event.target.parentNode);
  var 몇칸 = cans[몇줄].indexOf(event.target);

  if (cans[몇줄][몇칸].textContent !== "") {
    //칸이 이미 채워져 있는가?
    console.log("빈 칸이 아닙니다");
  } else {
    //빈칸이면
    console.log("빈 칸입니다");
    cans[몇줄][몇칸].textContent = turn;
    var victoryCheck = resultCheck(몇줄, 몇칸);
    //모든칸이 다 찼는지 검사
    var 후보칸 = [];
    cans.forEach(function (line) {
      line.forEach(function (can) {
        후보칸.push(can);
      });
    });
    후보칸 = 후보칸.filter(function (can) {
      return !can.textContent;
    });
    if (victoryCheck) {
      //이겼을경우
      reset();
    } else if (후보칸.length === 0) {
      //칸을 더이상 선택할 수 없음
      reset(true);
    } else {
      if (turn === "X") {
        turn = "O";
      }
      setTimeout(function () {
        console.log("컴퓨터의 턴 입니다.");
        //빈칸중 하나를 고른다
        var selectCan = 후보칸[Math.floor(Math.random() * 후보칸.length)];
        selectCan.textContent = turn;
        //컴퓨터가 승리했는지 체크
        var 몇줄 = lines.indexOf(selectCan.parentNode);
        var 몇칸 = cans[몇줄].indexOf(selectCan);
        var victoryCheck = resultCheck(몇줄, 몇칸);
        //다찼으면
        if (victoryCheck) {
          //컴퓨터가 이겼을 경우
          reset();
        }
        //턴을 나한테 넘긴다
        turn = "X";
      }, 1000);
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
body.appendChild(결과);
console.log(lines, cans);
