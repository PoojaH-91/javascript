let professor = {
    name : "Rahul",
    age : 40,
    gender : "Male",
    department : "Computer",
    qualification : "PHD",
    degrees : {
        engineering: "CSC",
        PHD : "Adv Computing",
        MBA : "ERP",

    },
    certificates : ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    concatDegrees : function(){
        console.log(`Teacher Degrees are: ${this.degrees.engineering}, ${this.degrees.PHD} ,${this.degrees.MBA}`)
    }
};
console.log(professor);
    
console.log(`Type of professor is ${typeof professor}`);
//calling function
professor.concatDegrees();

console.log(`------- Adding object properties----------`);
professor.totalExperience = "14 Years";
console.log(`Total experience of professor is :${professor.totalExperience}`)


professor.age = 45;
professor.department = "IT";
console.log(`professor age is : ${professor.age}`);
console.log(`professor department is : ${professor.department}`);
console.log(`------- Modify object properties----------`);
console.log(professor);

console.log(`-----Adding new certificate to array-----`);
professor.certificates.push("Oracle Certified");
console.log(`All certificates are: ${professor.certificates}`);

console.log(`----------Last certificate----------`);
var length=professor.certificates.length;
console.log(`Last certificates is: ${professor.certificates[length-1]}`);