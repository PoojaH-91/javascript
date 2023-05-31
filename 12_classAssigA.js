class Vehicle {
    constructor(name, model, colour, mileage, year){
        this.name= name;
        this.model= model;
        this.colour= colour;
        this.mileage = mileage;
        this.year= year;
    }
    showDetails(){
        console.log(`Vehicle details are : ${ this.name}, ${ this.model}, ${ this.colour}, ${ this.mileage}, ${ this.year}`);
    }
}
const honda = new Vehicle("BRV", "Suv","Black",20,"2010");
const ford = new Vehicle("Ikon","Sedan","Blue", 11, 2009);
const bmw= new Vehicle("i8", "racer", "red", 4, 2012);
const maruti= new Vehicle("A Star", "hatchback", "white", 15, 2009);
const mg= new Vehicle("Hector","Suv", "red",10,2018);

const array = [honda, ford, bmw, maruti, mg];

for (const element of array) {
    element.showDetails();
}

class College {
    constructor(name, year, city, state){
        this.name= name;
        this.year= year;
        this.city= city;
        this.state = state;
    }
    showDetails(){
        console.log(`College details are : ${ this.name}, ${ this.year}, ${ this.city}, ${ this.state}`);
    }
}

const collegeOne= new College("BIT", "1995", "Bilai", "CG");
const collegeTwo= new College("SSEC","2008","Bhilai","CG");
const collegeThree= new College("Symbiosis","1991","Pune","MH");
const collegeFour= new College("Mithibai","1950","Mumbai","MH");

function traverseObject(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} : ${element}`);
        }
    }
}
console.log(`=============Details of College One=============`);
traverseObject(collegeOne);
console.log(`=============Details of College Two=============`);
traverseObject(collegeTwo);
console.log(`=============Details of College Three============`);
traverseObject(collegeThree);
console.log(`==============Details of College Four============`);
traverseObject(collegeFour);


function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
    }
}
return true;  
}
}

console.log(`===============Prime number==================`);

console.log(`Given number 11 is prime : ${test_prime(11)}`);
console.log(`Given number 6 is prime : ${test_prime(6)}`);
console.log(`Given number 13 is prime : ${test_prime(13)}`);