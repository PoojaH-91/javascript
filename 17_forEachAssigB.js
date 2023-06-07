

class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id; 
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`======Finding employee names who have company as "TCS"============`);
array_employees.forEach((emp) => {
    if (emp.emp_company== "TCS") {
        console.log(`Employee name is : ${emp.emp_name} and Company name is : ${emp.emp_company}`);   
    }
});

console.log(`===================Salary greater than or equal to 50000 ============================`);
array_employees.forEach((emp) => {
    if (emp.emp_salary >= 50000) {
        console.log(`Employee Details are : ${emp.emp_name} ,${emp.emp_id}, ${emp.emp_dept}, ${emp.emp_salary}, ${emp.emp_company} `);   
    }
});

console.log(`============================Sum of all employee salary================================`);
let sumSalary = 0;
array_employees.forEach((emp) => {
    sumSalary = sumSalary+ emp.emp_salary;
});

console.log(`sum of all salary is : ${sumSalary}`);

console.log(`============================ Average salary================================`);
let avgSal = 0;
array_employees.forEach((emp) => {
    avgSal = sumSalary/ array_employees.length;
});
console.log(`Average salary of employees is: ${avgSal}`);


console.log(`====================details of employees who are from It or HR and salary of >= 750000 ================================`);
array_employees.forEach((emp) => {
    if ( (emp.emp_dept == "IT" || "HR") && (emp.emp_salary >= 75000)) {
        console.log(`Employee Details are : ${emp.emp_name} ,${emp.emp_id}, ${emp.emp_dept}, ${emp.emp_salary}, ${emp.emp_company} `);   
    }
});