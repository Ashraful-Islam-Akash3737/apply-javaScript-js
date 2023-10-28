// get total of an array using function

// function getSumOfAnArray(numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         total = total + element;
//     }
//     return total;
// }
// const myNumbers = [10, 38, 29, 62, 49, 50, 39, 49]
// const result =  getSumOfAnArray(myNumbers);
// console.log(result);



// get total(only using even number) of an array using function

function getSumOfAnArrayUsingOnlyEvenNumber(numbers){
    let total = 0;
    let evenNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 == 1){
            continue;
        }
        evenNumbers.push(element);
        total = total + element;
    }
    console.log("array is: ", evenNumbers);
    return total;
}
const myNumber = [10, 38, 29, 62, 49, 50, 39, 49]
const results =  getSumOfAnArrayUsingOnlyEvenNumber(myNumber);
console.log(results);