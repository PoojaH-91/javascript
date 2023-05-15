var wordOne = "Javascript";
function squareOfWordLength(givenWord) {
    var givenWord = wordOne;
    console.log("Given word is :",givenWord);
}
squareOfWordLength(wordOne);
console.log(`Length of word ${wordOne.length} , Square of word length ${wordOne.length**2}`);
var wordOne = "Google Chrome";
console.log(`Length of word ${wordOne.length} , Square of word length ${wordOne.length**2}`);
var wordOne = "Developer Smart";
console.log(`Length of word ${wordOne.length} , Square of word length ${wordOne.length**2}`);

console.log(`-------------------------------------------------------------------------`);

var givenString = "I am Angular Developer";

var totalWord = givenString.split(" ");
var splitLength = totalWord.length;
var divResult = givenString.length/splitLength;
var mulResult  = givenString.length * splitLength;
console.log(`given String is: ${givenString} , String length is : ${givenString.length} `);
console.log(`Total no. of words in given string is: ${splitLength}`);
console.log(`String divided by length of string :${divResult}` );
console.log(`String multiplied by length of string :${mulResult}` );
