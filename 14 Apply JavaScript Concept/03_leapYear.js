
function checkLeapYear(leapYear){
    if(leapYear % 4 == 0 && leapYear % 100 != 0 ||  leapYear % 400 ==0){
        console.log("Leap Year");
    }
    else{
        console.log("Not A Leap Year");
    }
}

checkLeapYear(2100);