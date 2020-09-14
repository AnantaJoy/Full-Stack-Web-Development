//  callback means pass a function a parameter 
function callback(name,age,address){
    console.log("Hello",name);
    console.log("Your are",age);
    address();
}

function location(){
    console.log("Dhaka")
}
function location2(){
    console.log("Rajshahi");
}
callback('Xoho',21,location);
callback('Yoka',22,location2);