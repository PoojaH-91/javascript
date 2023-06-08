



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

console.log(`Get the list of all employees name==>`);
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const arrayTcsEmployeeNames = array_employees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayTcsEmployeeNames);

console.log(`Get the list of all department  name==>`);
const arrayOfDept = array_employees.map( (employee) => {
    return employee.emp_dept;
});
console.log(arrayOfDept);

console.log(`Get the list of all employee ids and log==>`);
const arrayOfEmpids = array_employees.map( (employee) => {
    return employee.emp_id;
});
console.log(arrayOfEmpids);

