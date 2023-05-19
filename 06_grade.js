

function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<=0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
        
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else {
         if(marks>=75 && marks <90) {
            console.log(`Excellent marks : ${marks}, Your grade is A`);

         }
         else {
            if(marks>=50 && marks<75) {
              console.log(`Good marks : ${marks}, Your grade is B`);  
            }
            else {
                if(marks>=35 && marks<50){
                    console.log(`Marks is : ${marks}, Your grade is C, Need improvement`);
                }
            }
         }
       }
    }

    
}

gradeCalculation(98);
gradeCalculation(90);
gradeCalculation(80);
gradeCalculation(64);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(80);
gradeCalculation(-7);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);