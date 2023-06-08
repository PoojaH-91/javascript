

const arrayNums = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`===================new value========================`);
const arrayTransformed= [];

const arrayTrans = arrayNums.map( (element) => {
    return element + 10;
} );
console.log(arrayTrans);

console.log(`===================square numbers==========================`);
//const arraySquare = [];
const newArray =  arrayNums.map( (element) => {
    return element*element;
} );
console.log(newArray);


console.log(`========================element + index============================`);
const arrayNew= [];
const arraySum =  arrayNums.map( (element,index) => {
    arrayNew.push(element + index);
});
console.log(arrayNew);