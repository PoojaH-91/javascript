

'use strict'
const array = [11, 22, 33, 44, 55, 66];
console.log(array);
console.log(...array);

const array2 = [...array];

const person = {
    name: "Stew",
    age: 57,
    country: "US"
}

const person2 = {...person};
console.log(person2);


// rest parameter
function show(adharNum, role, ...parameters) {
    console.log(adharNum, role, parameters);
  }
  show(11223344, "CEO", 23, "Elon", "US");

  function division(num1, num2=1){ // let num1 = 7, let num2;
    if(num2==0){
        num2=1;
    } 
    console.log(num1/num2);
}
division(10, 5);
division(67, 0);
division(7);

console.log(`============ Object Destructuring =============`);
const student = {
    name: "Stew",
    age: 57,
    country: "US",
    pin: 223312,
    rollNo: 111,
    college: "COEP Pune",
    marks: "90%",
    degree: "BE CSE"
}
// const rollNo = student.rollNo;
// const name = student.name;
// const college = student.college;
// const degree = student.degree;
// const country = student.country;

const {rollNo,name, college, degree, country } = student;

const { pin, age, isMarried=false } = student;  // const pin = student.pin;
console.log(pin, age, isMarried);

const arr = [11, 22, 33];
const [element1, element2, num1, num2=0] = arr;
console.log(element1, element2, num1, num2);

console.log(`---------- Remove duplicate elements from array ---------------`);
const arrayNum = [11, 3, 4, 11, 4, 7, 3]; 
const setOfNum = [...new Set(arrayNum)];
// for (const element of arrayNum) {
//     setOfNum.add(element); 
// }
console.log(setOfNum);



// JavaScript program to capitalise the first
// and last character of each word in a string.
 
function FirstAndLast(str)
{
 
    // Create an equivalent string
    // of the given string
    var ch = str.split('');
    for (var i = 0; i < ch.length; i++)
    {
 
        // k stores index of first character
        // and i is going to store index of last
        // character.
        var k = i;
        while (i < ch.length && ch[i] != ' ')
            i++;
 
        // Check if the character is a small letter
        // If yes, then Capitalise
        ch[k] = String.fromCharCode(ch[k] >= 'a' &&
        ch[k] <= 'z' ? (ch[k].charCodeAt(0) - 32)
                     : ch[k].charCodeAt(0));
        ch[i - 1] = String.fromCharCode(ch[i - 1] >= 'a'
        && ch[i - 1] <= 'z'? (ch[i - 1].charCodeAt(0) - 32)
                            : ch[i - 1].charCodeAt(0));
		}
		return ch.join('');
	}	


