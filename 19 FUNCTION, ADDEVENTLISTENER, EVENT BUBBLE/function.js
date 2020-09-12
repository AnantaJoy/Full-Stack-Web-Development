Numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < Numbers.length; i++) {
    const element = Numbers[i];
    // square of even numbers
    function even_odd(element) {
        if (element%2==0) {
            console.log(element,'is EVEN');
        }
        else{
            console.log(element,'is ODD');
        }
    }
    even_odd(element)
}

friends_age = [21,22,22,25,24,20]

for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    even_odd(age)
}