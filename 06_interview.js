

function interEligibility(gradeScore,hscScore,sscScore,candidateName) {
    if (gradeScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates ${candidateName} You are eligible for interview`);
    } else {
        console.log(`Unfortunately ${candidateName} You are not eligible for interview`);
    }
}
interEligibility(80,86,90,"Pooja");
interEligibility(70,65,55,"Parul");
interEligibility(60,79,88,"Kavita");