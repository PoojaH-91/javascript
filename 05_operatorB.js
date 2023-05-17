var numOne;
var numTwo;
var greaterNum = function(numOne,numTwo){
    console.log(numOne>=numTwo ? `${numOne} is greater number then ${numTwo}` : `${numTwo} is greater number then ${numOne}`);
}
greaterNum(10,-10);
greaterNum(800,899);

console.log(`--------------------------------------------------`);

var num ;
var isEvenOrOdd = function(num){
    var remainder = num%2;
    var result = remainder == 0? "True" : "False";


    console.log(`number ${num} is an Even number : ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log(`--------------------------------------------------`);

var word;

var wordLength = function(word){

    var result = word.length %2;
    var evenOrOdd = result==0 ? "Even": "Odd";
    console.log(`The word ${word} is ${evenOrOdd}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");
