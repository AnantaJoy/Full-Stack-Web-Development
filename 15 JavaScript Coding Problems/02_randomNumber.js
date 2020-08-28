//////////////////////////
// Rock Papper Scissors //
//////////////////////////

var number = Math.floor(Math.random()*3);
number += 1;

switch(number){
    case 1:
        console.log("Rocks");
        break;
    case 2:
        console.log("Pappers");
        break;
    case 3:
        console.log("Scissors");
        break;
}