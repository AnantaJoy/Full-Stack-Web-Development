// passing two arguments in a function
function addNum(num1,num2) {
    return num1 + num2;
}

var result = addNum(20,10);
console.log("Sum =",result);

// multiple arguments passing
// arguments is called array like object
function addNum(num1,num2) {
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num; 
    }
    return sum;
}

var result = addNum(20,10,8,6,9,6);
console.log("Sum =",result);