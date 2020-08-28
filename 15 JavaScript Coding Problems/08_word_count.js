var speech = "This page    is under construction";
var count = 0;
for (let i = 0; i < speech.length; i++) {
    const character = speech[i];
    if (character == " " && speech[i-1] !=" ") {
        count++;
    }
}

console.log(count+1);