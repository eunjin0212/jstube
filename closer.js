 for (var i = 0; i < 10; i++) {
   setTimeout(function () {
     console.log(i); // i는 반복문에서 선언한 i가 됨
   }, i * 1000);
 }

 function getCounter() {
   // 3. getCounter 함수는 counter 함수를 리턴
   let count = 0; // 5. count 변수가 안에 없어서 밖에서 찾음
   return function counter() {
     count++; // 6. 변수 count는 하나씩 커진다
     return count; // 4. counter 함수는 count 변수를 리턴
   };
 }
 const newCounter = getCounter(); // 1. 클로저 생성 newCounter에 getCounter 함수를 대입한다

 for (let i = 0; i < 10; i++) {
   console.log(newCounter()); // 2. newCounter에 대입된 getCounter 함수 찾음/ }

function outside() {
  const outVar = "name"; //4. outVar 변수 찾음
  return function inside() {
    console.log(outVar); //3. outVar 변수 찾기 --> insider 함수 안에 outVar변수가 없으니 위로 올라가 변수를 찾음
    //5. console.log 실행 name
  };
}

const insider = outside(); // 1. 클로저 생성 <-- 외부 스코프의 outside함수 안에 변수를 사용 "클로저"

insider(); // 2. 함수 실행

function mul(x) {
  return function (y) {
    console.log(x * y);
  };
}

const a = mul(5);

a(3);
