var myName = "Pooja Hirwani";
var length = myName.length;
console.log("Total number of characters is:", length);

console.log("###########################################################################################");
//assignment
var hobbyOne = "Reading";
var hobbyTwo = "Traveling";
var hobbyThree = "Writing";

function stringBasics() {
    console.log("My dream company is JP Morgan");
}
stringBasics();

console.log("My Hobbies are: ",hobbyOne, " ,", hobbyTwo, " ,", hobbyThree);

var totalChar;
totalChar = hobbyOne+hobbyTwo+hobbyThree;
var length = totalChar.length;
console.log(" Total number of chracters in my hobbies are", totalChar.length);


console.log("###########################################################################################");

var greet = "   Hey you are doing good, keep it up   ";
function stringhandsOn() {
    console.log(greet);
}
stringhandsOn();
var length = greet.length;
console.log("Total length of string is :", "",greet.length);
var trimString = greet.trim();
console.log("String after trim :",trimString, ",", "Trimmed string length is :", trimString.length);
var extra = length - trimString.length;
console.log("Total number of extra spaces are :", extra);
var firstChar = trimString.charAt(0);
var lastChar = trimString.charAt(33);
console.log("First character of the string is:", firstChar," ,", "Last character of the string is :", lastChar);
