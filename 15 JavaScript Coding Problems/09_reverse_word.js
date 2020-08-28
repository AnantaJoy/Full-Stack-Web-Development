function reverseWord(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

console.log(reverseWord("Hello World"));