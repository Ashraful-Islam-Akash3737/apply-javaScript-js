// get total of an array using function

function getSumOfAnArray(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        total = total + element;
    }
    return total;
}
const myNumbers = [10, 38, 29, 62, 49, 50, 39, 49]
const result =  getSumOfAnArray(myNumbers);
console.log(result);