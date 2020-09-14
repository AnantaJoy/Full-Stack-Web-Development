function odd_even(num) {
    if (num%2==0) {
        return num*num
    } else {
        return 3*num
    }
}

numbers = [4]
x = odd_even(numbers)
console.log(x)