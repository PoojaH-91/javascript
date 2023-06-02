

const arrayNums = [20,3,4,56,90,400,49];
const clonedArray = arrayNums;
console.log(`Original Array is ${arrayNums}`);

clonedArray.push(55,66);
console.log(`Cloned Array is ${clonedArray}`);

const deepClonedArray = [...arrayNums];
arrayNums.push(10,25);
console.log(`=================================Updated Array===============================`);
console.log(`Original updated Array is ${arrayNums}`);

console.log(`====================================Deep Cloning Array ====================================`);
console.log(`Array after deep cloning is ${deepClonedArray}`);

const arrayEven = [2,30,14,8];
const mergedArray = arrayEven.concat(...arrayNums);
console.log(`============================Concating or Merging two arrays=========================`);
console.log(`Merged Array is ${mergedArray}`);

const employee_info = {
    emp_id :27 ,
    emp_name : "John Doe" ,
    salary : {
        jul_month : "40000 INR",
        june_month : "50000 INR",
        aug_month : "65000 INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society" ,
            street: "Kanch Pokli ,43102"},
        city :"Mumbai" ,
        state :"MH" ,
        country : "India"     

        },
    mobiles  : ["+91 880 6784 765", "1800 222 345", "+91 123 2345"]       
}
console.log(`=================================Employee Information================================`);
console.log(`Adress is : Locality - ${employee_info.address.locality.colony} ${employee_info.address.locality.street}, City - ${employee_info.address.city}, State - ${employee_info.address.state}, Country -${employee_info.address.country}`);
console.log(`Mobile numbers - ${employee_info.mobiles}`);

console.log(`==========================Deep Cloning===============================`);
const employee_infoClone = JSON.parse(JSON.stringify(employee_info));

employee_infoClone.salary.july_month = "80000 INR";
employee_info.address.country = "United Kingdom";

console.log(`Original updated Employee information is : Locality - ${employee_info.address.locality.colony} ${employee_info.address.locality.street}, City - ${employee_info.address.city}, State - ${employee_info.address.state}, Country -${employee_info.address.country}`);


console.log(`Array after Deep Cloning is : Locality- ${employee_infoClone.address.locality.colony} ${employee_infoClone.address.locality.street}, City-${employee_infoClone.address.city}, State-${employee_infoClone.address.state}, Country- ${employee_infoClone.address.country}`);


