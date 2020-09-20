var tetris = document.querySelector("#tetris");
var tetrisData = [];

function 칸만들기() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 20; i++) {
    var tr = document.createElement("tr");
    var arr = [];
    tetrisData.push(arr);
    fragment.appendChild(tr);
    for (var j = 0; j < 10; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
      arr.push(0);
    }
  }
  console.log(tetrisData);
  tetris.appendChild(fragment);
}
window.addEventListener("keydown", function (e) {
  console.log(e);
  switch (e.code) {
    case "ArrowRight":
      console.log("ArrowRight");

      break;
    //오른쪽으로 이동
    case "ArrowLeft":
      console.log("ArrowLeft");

      break;
    //왼쪽으로 이동
    case "ArrowDown":
      console.log("ArrowDown");

      break;
    //아래쪽으로 이동
    default:
      break;
  }
});
window.addEventListener("keyup", function (e) {
  switch (e.code) {
    case "Space":
      console.log("Space");

      break;
    //한방에 내리기
    case "ArrowUp":
      console.log("ArrowUp");

      break;
    //방향 전환
    default:
      break;
  }
});
칸만들기();
