const array =[11,22,33,44,55];
// const clonedArray = array; // Shallow clone
// clonedArray.splice(2, 0, 100, 200);
// console.log(array);
// console.log(clonedArray);

const clonedArray = [...array];
clonedArray.splice(2, 0, 100, 200);
console.log(array);
console.log(clonedArray);

const arrayNums = [ 20, 3, 4, 56, 90, 400, 49  ]
const newArray = arrayNums;

console.log(`========= concat array ==========`);
const array1 = [1, 2,3, 45, 6];
const array2 = [33, 44, 88, 99];

const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1, ...array2, ...array3];
console.log(array4);
