var name = [1,2,2,4,2,3,2,3,4,4,5,7];
var unique = [];

for (let i = 0; i < name.length; i++) {
    const element = name[i];
    var index = unique.indexOf(element);
    if (index==-1) {
        unique.push(element);
    }
}

console.log(unique);