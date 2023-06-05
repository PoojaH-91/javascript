

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

const array_employees = [emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika, emp_viny,emp_mahi] ;

console.log(`======Finding employee names who have company as "TCS"============`);

for (const Employee of array_employees) {
    if (Employee.emp_company == "TCS") {
        console.log(`Employee name is : ${Employee.emp_name} and Company name is : ${Employee.emp_company}`);
    }
    
}

console.log(`============Finance Department Employees=============`);
for (const Employee of array_employees) {
    if (Employee.emp_dept == "Finance") {
        console.log(`Employee name is : ${Employee.emp_name} and Department name is : ${Employee.emp_dept}`);
    }
    
}

console.log(`==================Employee details whose name starts with "R"==================`);

for (const Employee of array_employees) {
    if (Employee.emp_name.startsWith("R")) {
       console.log(`Employee Details are : ${Employee.emp_name} ,${Employee.emp_id}, ${Employee.emp_dept}, ${Employee.emp_salary}, ${Employee.emp_company} `);
    }
    
}

console.log(`==================Employees whose salary is greater than 75000===========================`);

for (const Employee of array_employees) {
    if (Employee.emp_salary > 75000) {
        console.log(`Employee name is : ${Employee.emp_name}, company name is : ${Employee.emp_company} and salary is : ${Employee.emp_salary}`);
    }
    
}


console.log(`===================Salary greater than or equal to 50000 from IT department=================`);

for (const Employee of array_employees) {
    if (Employee.emp_salary >= 50000 && Employee.emp_dept== "IT") {
        console.log(`Employee Details are : ${Employee.emp_name} ,${Employee.emp_id}, ${Employee.emp_dept}, ${Employee.emp_salary}, ${Employee.emp_company} `);
    }
    
}

console.log(`===================================All employees of Infy=======================================`);
for (const Employee of array_employees) {
    if (Employee.emp_company == "Infy") {
        console.log(`Employee name is : ${Employee.emp_name}, company name is : ${Employee.emp_company} and salary is : ${Employee.emp_salary}`);
    }
    
}