

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

//console.log(`Get the list of all employees name==>`);

const arrayEmpss = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Get the list of Wipro employee names====>");
const arrayTcsEmployees = arrayEmpss.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );

const arrayTcsEmployeeNames = arrayTcsEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayTcsEmployeeNames);

console.log("Find all the employees from IT or HR dept==>");
const arrayITnHRDept = arrayEmpss.filter( (employee) => {
    if(employee.emp_dept=="IT" || employee.emp_dept=="HR"){
       console.log(employee)
    }    
} );

console.log("Find all the employees whose emp ids >50")
const arrayEmpids = arrayEmpss.filter( (employee) => {
    if(employee.emp_id>50){
       console.log(employee)
    }    
} );

console.log("Find all the employees whose name starts with  'A' 'V' 'M'");
const arrayEmpsLetters = arrayEmpss.filter( (employee) => {
   // var empname= employee.emp_name.st;
    if(employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")){
        console.log(employee)
    }
       
    }    
);

var emptotalSal = 0;
var totalEmp = 0;

arrayEmpss.filter( (employee) => {
    emptotalSal = emptotalSal + employee.emp_salary;
    totalEmp++;
});
var avgSal = emptotalSal / totalEmp;
console.log(`-------------------Find the Avg salary of all employee ------------------------`)
console.log(`Average salary of employee is =>${avgSal}`)

