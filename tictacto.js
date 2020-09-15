var body = document.body;
var table = document.createElement(`table`);
var lines = [];
var cans = [];

var 비동기콜백 = function (event) {
  console.log(event.target); //칸
  console.log(event.target.parentNode); //줄
  console.log(event.target.parentNode.parentNode); //테이블
  var 몇줄 = lines.indexOf(event.target.parentNode);
  console.log("몇줄", 몇줄);
  var 몇칸 = cans[몇줄].indexOf(event.target);
  console.log("몇칸", 몇칸);
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
console.log(lines, cans);
