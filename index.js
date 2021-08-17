//__________ 1
var a = (b = c = 10);
console.log(a, b, c);

//__________ 2
(function() {
  var d = (e = f = 10);
})();

console.log(f);
console.log(e);
// console.log(d)

//__________ 3
var g = 100;
function callG() {
  var g = 200;
}

callG();
console.log(g);

//__________ 4
var h = 100;
function callH() {
  var h = 200;
  console.log(h);
}

callH();

//__________ 5
var i = 10;
function calli() {
  if (i > 20) {
    var i = 50;
  }

  console.log(i);
}

calli();
