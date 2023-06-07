

const arrayNum = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];


arrayNum.forEach((element,index) => {
    console.log(`Element is : ${element}, whose index value is: ${index}`);
});

console.log(`=====================Positive values of array==========================`);

arrayNum.forEach((element) => {
    if (element >0) {
       
        console.log(element);
    }
    
});

console.log(`=========================negative numbers=================================`);
arrayNew = [];
arrayNum.forEach((element)=>{
    if (element < 0) {
        arrayNew.push(element)
        
    }
});
console.log(`New array with only negative numbers ${arrayNew}`);

console.log(`==============================Even Numbers================================`);

arrayNum.forEach((element, index)=>{
    if (element %2==0) {
        console.log(element);
    }
});

console.log(`==================Sum of all numbers in array======================`);
let total = 0;

arrayNum.forEach((element, index)=> {
    total = total+element;

});
console.log(`Sum of all numbers ${total}`);

console.log(`================Even indexed array====================`);

arrayNum.forEach((element, index) => {
    if(index%2==0){
        console.log(`Elements at even index are : ${element}`);
    }
});