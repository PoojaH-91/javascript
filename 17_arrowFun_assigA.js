
// arrow function with no arguments and no return value
let display= () => {
    console.log(`Good morning, Today is monday`);
}
display();

console.log(`===============================================================================`);

let multiply = (numOne, numTwo, numThree=1) => {
    console.log(`Numbers to be multiplied are ${numOne}, ${numTwo}, ${numThree}`);
     var result = numOne * numTwo * numThree;
    console.log(`Multiplication Result is : ${result}`);
}
multiply(5,5,2);
multiply(10,4);

console.log(`===============================================================================`);

let addValue = (arg1, arg2, arg3, arg4,arg5) => {
    console.log(`Values to be added are ${arg1}, ${arg2}, ${arg3},${arg4},${arg5}`);
    var add = arg1+ arg2+ arg3+ arg4+ arg5 ;
    console.log(`Addition result is : ${add}`);
}
addValue(100,100,200,349,756);
addValue("I am ", "learning ", "ES6 ", "features ","in depth ");

