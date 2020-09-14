
function largestNumber(number) {
    largest = number[0];
    for (let i = 0; i < number.length; i++) {
        var element = number[i];
        if (element>largest) {
            largest = element;
        }        
    }
    return largest;
    }

numbers = [23,32,85,20,57,58,44];

var largestNum = largestNumber(numbers);
console.log("Largest Numbers is:",largestNum);