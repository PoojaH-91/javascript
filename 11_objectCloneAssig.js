

const bankSbi = {
    bankName : "SBI",
    ifsc : "SBI1234",
    branch : "Baner",
    city : "Pune"
}

const bankLocation = {
    street: "MG road",
    city:"Mumbai",
    pin: 411111

}

Object.assign(bankSbi,bankLocation);

console.log(`======Cloning bankSbi and bankLocation=======`)

console.table(bankSbi);

const rateOfIntrest = {
    homeLoanInterest : "12%",
    personalLoanInterest : "10%",
    dueInterest :"5%"
}
const sbiDetails = Object.assign(bankSbi,bankLocation,rateOfIntrest);

console.log(`=======merging objects in object sbidetails======`);

console.table(sbiDetails);

console.log(`=======Traversing merged object sbidetails======`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}
