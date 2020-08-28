var examMarks = [69,76,87,75,45,75,95,74,84]
var Sum = 0;

for (let i = 0; i < examMarks.length; i++) {
    const element = examMarks[i];
    Sum += element;
}

console.log(Sum);