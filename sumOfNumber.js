// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
function sumOfNumber(number){
    let result = 0;
    for(let i = 1; i <= number; i++){
        result = result + i;
    }
    return result;
}
const myNumber = 10;
const results =  sumOfNumber(myNumber);
console.log(results);


// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10
function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const myNumbers = 10;
const result =  multiplicationOfNumbers(myNumbers);
console.log(result);



// factorial of 15
function factorialOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const givenNumber = 15;
const output =  factorialOfNumbers(givenNumber);
console.log(output);