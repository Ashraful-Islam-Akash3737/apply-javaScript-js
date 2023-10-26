// check if the year is leap-year
function isLeapYear(theYear){
    if(theYear % 4 == 0){
        return "this year is leap year ";
    }
    else{
        return  "this year is not leap year";
    }
}

const leapYear = isLeapYear(2024);
console.log(leapYear);