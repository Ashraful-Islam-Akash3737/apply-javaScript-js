// convert inch tnto feet
let standerdHeight = 7 ;
let jimHeightInInch = 84 ;

let jimHeight = jimHeightInInch / 12 ;
console.log(jimHeight);

if(jimHeight >= standerdHeight){
    console.log("Jim can join the vollyball team");
}
else{
    console.log("Jim can't join the vollyball team");
}




// convert inch tnto feet with the help of function
function inchToFeet (inch){
    let feet = inch / 12;
    return feet;
}
const jimsHeight = 84;
var result = inchToFeet(jimsHeight);
console.log(result);