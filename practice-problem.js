// practice problem 1
// convert hour into minute
function hourToMinute (hour){
    let minute = hour * 60;
    return minute ;
}
const result = hourToMinute(10);
console.log(result);




// practice problem 2
// display the leap-year year of an array
function findLeapYear(years){
    const leapYear = [];
    for(let i = 0; i <= years.length; i++){
        const elements = years[i];
        
        if(elements % 4 == 0){
            leapYear.push(elements);
            
        }
        
    }
    
    return leapYear;
}
const leapYearArray = [2023,2020, 2024, 2025, 2028, 2030];
const output = findLeapYear(leapYearArray);
console.log("leap year is:", output);