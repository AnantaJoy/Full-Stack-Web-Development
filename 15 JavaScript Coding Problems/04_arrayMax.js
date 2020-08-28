var stdMarks = [32,34,73,56,67,69,71,65,39,56,48];
var max = stdMarks[0];
for (let i = 0; i < stdMarks.length; i++) {
    var element = stdMarks[i];
    if(element>max){
        max = element;
    }
    
}

console.log("Maximum Marks is", max);