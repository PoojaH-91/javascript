function funOne() {
    console.log("function no. one");
}
funOne();

function funTwo() {
    console.log("function no. two");
}
funTwo();


console. log("===========================================================================================");

function personalDetails(firstName, lastName, collegeName) {
    console.log("My Personal Details Are as follow: ");
    console.log("First Name:", firstName, "Last Name:", lastName, "College Name:", collegeName);
}
personalDetails("Pooja", "Hirwani", "SACET");


console. log("===========================================================================================");
var temp;
var nameOne = "Virat";
var nameTwo = "Anushka";

function swapValuesDude(valueOne, valueTwo) {
    console.log("Values Before swapping:", valueOne, valueTwo );
    temp= valueOne;
    valueOne=valueTwo;
    valueTwo= temp;
    console.log("Values After swapping:",valueOne, valueTwo);

}
swapValuesDude(nameOne, nameTwo);
swapValuesDude("1000", "2000");

console. log("===========================================================================================");
var valOne = 10.63;
var valTwo = 600;
var valThree = 40;
var add;

function addThreeValues(first, second, third) {
    console.log("Values before addition :", first ,",", second, ",", third);
    add = first+ second+ third;
    console.log("Total Value:", add);
}
addThreeValues(valOne,valTwo, valThree);
addThreeValues("Hello ", "Good ", "Morning");