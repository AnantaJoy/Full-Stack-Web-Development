

function primeNumber(inputNum){
    for(var i = 2; i<=inputNum-1; i++){
        if(inputNum%i==0){
            return "Not Prime";
        }
        else{
            return "Prime";
        }
    }
}

console.log(primeNumber(13));