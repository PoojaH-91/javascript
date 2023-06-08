

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Original array=> ${arrayNumbers}`)

console.log(`Numbers which are >50`)
const arrayGreaterThan50 = arrayNumbers.filter((element) => {
    return element > 50;
});
console.log(arrayGreaterThan50);

console.log(`Even numbers==>`);
const arrayOfEvenNumbers = arrayNumbers.filter((element) => {
    if (element % 2 == 0) {
        return element
    }
});
console.log(arrayOfEvenNumbers)

console.log(`Odd numbers==>`);
const arrayOfOddNumbers = arrayNumbers.filter((element) => {
    if (element % 2 !== 0) {
        return element
    }
});
console.log(arrayOfOddNumbers);

console.log(`Multiple of 5==>`)
const arrayOfMultiple5 = arrayNumbers.filter((element) => {
    if (element % 5 == 0) {
        return element
    }
});
console.log(arrayOfMultiple5);

console.log(`Numbers between 20 and 50===>`);
const arrayOf20n50 = arrayNumbers.filter((element) => {
    if (element > 20) {
        if (element < 50) {

            return element;
        }
    }

});
console.log(arrayOf20n50);