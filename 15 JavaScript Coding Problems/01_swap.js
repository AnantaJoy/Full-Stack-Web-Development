////////////////////////
// Using temp variable//
////////////////////////
var x = 6;
var y = 9;
console.log("Before swap x=",x,"y=",y);

var temp = x;
x = y;
y = temp;

console.log("After swap x=",x,"y=",y);

///////////

var x = 6;
var y = 9;
console.log("Before swap x=",x,"y=",y);

x = x + y;
y = x - y;
x = x - y;

console.log("After swap x=",x,"y=",y);

var x = 6;
var y = 9;
console.log("Before swap x=",x,"y=",y);

[x, y] = [y, x];
console.log("Before swap x=",x,"y=",y);

