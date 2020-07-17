var num1 = '43';
var num2 = '33.4';

// // use 
num1 = parseInt(num1);
num2 = parseFloat(num2);

console.log(num1+num2);

// // use + sign to transform string value to integer or float value 
console.log((+num1)+(+num2));

// // sum of decimal numbers

var xNum = .11;
var yNum = .1;
total  = xNum + yNum;
total = total.toFixed(5);
console.log(total);