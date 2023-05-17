

function interEligibility(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore>=70 || hscScore >=80 || sscScore >90)? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName} you are not eligible for interview`;
    return result;
    console.log(`${result}`);
}
var returnResult = interEligibility(80,86,90,"Pooja");
console.log(`${returnResult}`);
var returnResult = interEligibility(70,65,55,"Parul");
console.log(`${returnResult}`);
var returnResult = interEligibility(60,79,88,"Kavita");
console.log(`${returnResult}`);
