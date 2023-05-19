
/*
function voteEligibility(age) {
    if(age>= 18 && age<=90) {
        console.log(`Age ${age}: You ae eligible for voting`);
    } else {
        console.log(`Age  ${age}: You are not eligible for voting`);
       
    }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(200);

function voteEligibility(age){
    if(age==0 || age== -10 || age > 120){
        console.log(`Age ${age} Invalid Data`);
    }
}
voteEligibility(-10);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
console.log(`---------------------------------------------`);
*/

function VoteEligibility1(age){
             if (age==0 || age== undefined || age>120 || age<=0 || age==null) {
                console.log(`Invalid data: ${age}`); 
             } 
             else{
                if(age<18){
                    console.log(`Not Elligible for vote: ${age}`); 
                }
                else{
                    console.log(`Elligible for vote: ${age}`); 
                }
             }         
                 }

                 VoteEligibility1(45)
                 VoteEligibility1(17)
                 VoteEligibility1(8)
                 VoteEligibility1(20)
VoteEligibility1(-10)
VoteEligibility1(200)
VoteEligibility1(0)
VoteEligibility1(undefined)
VoteEligibility1(null)