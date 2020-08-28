//////////////////////
///// For Loop     ///
//////////////////////
// function nFactorial(num1){
//     if(num1==0){
//         console.log(1);
//     }
//     else if(num1 > 0){
       
//         var factorial = 1;
//         for(var i; i <= num1; i++){
//             factorial = factorial*i;
//         }
//         console.log(factorial);
        
//     }
//     else{
//         console.log("Invalid INPUT");
//     }
    
// }

//nFactorial(5);

////////////////
// While Loop //
////////////////

// var i = 1;
// var nFactorial = 1;

// function nthFactorial(num1){
//     if(num1==0)
//     {
//         console.log(1);
//     }
//     else if(num1>=1)
//     {
//         while(i<=num1){
//             nFactorial = nFactorial*i;
//             i++;
//         }
//         console.log(nFactorial);
//     }
// }
// nthFactorial(5)
/////////////////
// Recursion  ///
/////////////////

function nthFactorial(num1){
    if(num1==0){
        return 1
    }
    else if(num1>=0){
        return num1*nthFactorial(num1-1);
    }
    else{
        x = "Invalid Input";
        return x;
    }

}

console.log(nthFactorial(5));