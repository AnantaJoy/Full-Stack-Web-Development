// feet to Mile conversion

function feetToMile(feet){

    if (feet>=0) {
        mile = feet/5280;
        return mile.toPrecision(5) ;
    }
    else{
        return "Invalid Input";
    }
}

var userInputInFeet = 14000;
console.log(userInputInFeet,"Feet is equal to", feetToMile(userInputInFeet),"mile");

// Wood Calculator

function woodCalculator(chair,table,bed) {
    woodForChair = chair*5;
    woodForTable = table*8;
    woodForBed = bed*12;
    totalWood = woodForChair+woodForTable+woodForBed; 
    return totalWood;
}

var chair = 5;
var table = 3;
var bed = 2;

console.log("Total amount of wood you need",woodCalculator(chair,table,bed,),"cubic cm");

// Brick Calculator 
function brickCalculator(floorNumber) {
    if (floorNumber>=0 && floorNumber<=10) {
        return floorNumber*15*1000;
    } 
    else if(floorNumber>10 && floorNumber <20){
        const bricksForBase = 10*15*1000; // for ten floor
        var forUpperFloor =  floorNumber%10; // above ten floor
        return bricksForBase +(forUpperFloor*12*1000);
    }
    else if(floorNumber>20){
        const bricksForBase = (10*1500*10) + (10*12*1000); // Bricks for below 20 floors
        var forUpperFloor = floorNumber%20; // bricks for upper 20 floors
        return bricksForBase + (10000*forUpperFloor);
    }
    else{
        return "Invalid Input";
    }
}

var numberOfFloor = 21;
console.log("Total amount bricks need:",brickCalculator(numberOfFloor));


// tiny Friend

function tinyFriend(friendsName){
    let shortLength = Infinity;
    let shortest = ""
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length<shortLength) {
            shortest = friendsName[i];
            shortLength = friendsName[i].length;
        }
    }
    return shortest;
}

friendsName = ['Zoahd','Zoya','Joy','Ziaur','Jashim'];
console.log("Tiny named friend:",tinyFriend(friendsName));