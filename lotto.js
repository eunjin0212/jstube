//당첨숫자 맞추는것 만들어보기 (숫자야구)

// 45개 숫자 만들기 = 배열
var 후보군 = Array(45)
  .fill()
  .map(function (요소, 인덱스) {
    return 인덱스 + 1; //1부터 시작하게 하기
  });
console.log(후보군);

var 셔플 = [];
while (후보군.length > 0) {
  var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
  셔플.push(이동값);
}

var 보너스 = 셔플[셔플.length - 1];

var 당첨숫자들 = 셔플.slice(0, 6).sort(function (p, c) {
  return p - c;
});

var 결과창 = document.querySelector(`#결과창`);
function color(number, 결과창) {
  var 공 = document.createElement(`div`);
  공.textContent = number;
  공.style.display = "flex";
  공.style.flexDirection = "column";
  공.style.justifyContent = "center";
  공.style.border = "1px solid black";
  공.style.borderRadius = "50%";
  공.style.width = "30px";
  공.style.height = "30px";
  공.style.textAlign = "center";
  공.style.marginRight = "10px";
  공.className = "공아이디" + number;
  var backGroundColor;
  if (number <= 10) {
    backGroundColor = "red";
  } else if (number <= 20) {
    backGroundColor = "orange";
  } else if (number <= 30) {
    backGroundColor = "yellow";
  } else if (number <= 40) {
    backGroundColor = "blue";
  } else {
    backGroundColor = "green";
  }
  공.style.background = backGroundColor;
  결과창.appendChild(공);
}
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[0], 결과창);
}, 1000);
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[1], 결과창);
}, 2000);
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[2], 결과창);
}, 3000);
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[3], 결과창);
}, 4000);
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[4], 결과창);
}, 5000);
setTimeout(function 비동기콜백함수() {
  color(당첨숫자들[5], 결과창);
}, 6000);
setTimeout(function 비동기콜백함수() {
  var 칸 = document.querySelector(`.보너스`);
  var 공 = document.createElement(`div`);
  color(보너스, 칸);
}, 7000); //밀리초

// for (var i = 0; i < 당첨숫자들.length; i++) {
//   (function (j) {
//     setTimeout(function callback() {
//       var 공 = document.createElement("div");
//       공.textContent = 당첨숫자들[j];
//       공.style.display = "flex";
//       공.style.flexDirection = "column";
//       공.style.justifyContent = "center";
//       공.style.border = "1px solid black";
//       공.style.borderRadius = "50%";
//       공.style.width = "30px";
//       공.style.height = "30px";
//       공.style.textAlign = "center";
//       결과창.appendChild(공);
//     }, j * 1000);
//   })(i);
// }
