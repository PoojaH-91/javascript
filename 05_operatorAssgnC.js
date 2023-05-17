


function maleMarriageEligibility(gender,age,boyName){
    var result = (gender=="Male" && age>=21)  ? `Hey ${boyName} You are eligible` : `Hey ${boyName} No you are not eligible`;
    return result;
    console.log(`${result}`);
}
var returnValue=maleMarriageEligibility("Male",25,"Bill gates");
console.log(`${returnValue}`)

var returnValue1=maleMarriageEligibility("Male",17,"Steve jobs");
console.log(`${returnValue1}`)

function femaleMarriageEligibility(gender,age,girlname){
    var result = (gender=="Female" && age>=18)  ? `Hey ${girlname} You are eligible for Marriage` : `Hey ${girlname} No you are not eligible for Marriage`;
    return result;
    console.log(`${result}`);
}
var returnValue=maleMarriageEligibility("Female",16,"Jennifer");
console.log(`${returnValue}`)

var returnValue1=maleMarriageEligibility("Male",27,"Malinda Gates");
console.log(`${returnValue1}`);
