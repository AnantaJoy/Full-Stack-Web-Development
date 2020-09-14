function factorialVal(num){
    var fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact*i;
        console.log(i,fact);
    }
    console.log(fact);
}

factorialVal(5);


// 5*factorial(5-1)
// 5*4*3*2*1
function factorialRecursive(number){
    if (number==0 || number == 1) {
        return 1;
    }

    else{
        return number*factorialRecursive(number-1);
    }
}

var factorial = factorialRecursive(5);
console.log(factorial);
