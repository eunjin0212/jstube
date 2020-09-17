var screen = document.querySelector("#screen");
var startTime;
var endTime;
var recording = [];
var timeOut;

screen.addEventListener("click", function () {
  if (screen.classList.contains("waiting")) {
    //대기 상태인지 파악
    screen.classList.remove("waiting");
    screen.classList.add("ready");
    screen.textContent = "초록색이 되면 클릭하세요";
    timeOut = setTimeout(function () {
      startTime = new Date();
      screen.click();
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (screen.classList.contains("ready")) {
    //준비 상태
    if (!startTime) {
      //부정클릭
      clearTimeout(timeOut);
      screen.classList.remove("ready");
      screen.classList.add("waiting");
      screen.textContent = "너무 성급하시군요";
    } else {
      screen.classList.remove("ready");
      screen.classList.add("now");
      screen.textContent = "클릭하세요";
    }
  } else if (screen.classList.contains("now")) {
    //시작 상태
    endTime = new Date();
    console.log("반응속도", endTime - startTime, "ms");
    recording.push(endTime - startTime);
    startTime = null;
    endTime = null;
    screen.classList.remove("now");
    screen.classList.add("waiting");
    screen.textContent = "클릭해서 시작하세요";
  }
});
