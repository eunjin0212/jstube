var name = "zero";
function log() {
  console.log(name); // 3. log 함수 안에  4. name 변수가 없음
  // 5. 함수 위에 있는 전역 변수를 찾아감
  // 6. 전역변수에 name이 있으므로 console.log(name)은 zero
}
function wrapper() {
  var name = "nero"; //무시가 됨
  log(); // 2. log 함수 실행
}
wrapper(); // 1. 함수 실행
