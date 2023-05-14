function Square(x){
    var result=x*x;
    return result
    //console.log(result)
    }
    var squareOffive=Square(5);
    var squareOfsix=Square(6);
    var squareOftwentyfive=Square(25);
    var squareOfHund=Square(100);
    console.log("Square of 5 is: "+squareOffive)
    console.log("Square of 6 is: "+squareOffive)
    console.log("Square of 25 is: "+squareOffive)
    console.log("Square of 100 is: "+squareOffive)
    console.log("--------------Point 2----------------")
    console.log("Type of function is: "+ typeof(Square))
    console.log("--------------Point 3----------------")
    var area = function (w, l) {
        var result = w*l;
        return `Area of reactangle is: ${result}`;
    }
    var result = area(499, 917);
    console.log(result);
    console.log("--------------Point 4----------------")
    console.log("After swap")
    var str1="Virat"
    var str2="Anushka"
    console.log("Before swap val1: "+str1)
    console.log("Before swap val2: "+str2)
    var swapValues = function (str1, str2) {
        var temp= str1;    
        str1=str2;
        str2=temp;
        console.log("After swap val1: "+str1)
        console.log("After swap val2: "+str2)
    }
    console.log("After swap")
    swapValues(str1,str2)
    console.log("swapping of 1000 and 2000")
    var val1="1000"
    var val2="2000"
    console.log("Before swap val1: "+val1)
    console.log("Before swap val2: "+val2)
    swapValues(val1,val2)
    
    console.log("--------------Point 5----------------")
    
    var stringOp = function () {
        var str="JS the most popular language of internet"
        var charlen=str.length
        console.log("Total character in the string:"+charlen)
        console.log("Character at index 6 is:"+str.charAt(6))
        console.log("Character at index 11 is:"+str.charAt(11))
        console.log("Last character from the string: "+str.charAt(charlen))
        console.log("First character of the given string is:"+str.charAt(0))
        var splitStr=str.split(" ")
        var stplitStrArrCount=splitStr.length;
        console.log("Total number of words in the given string is :"+ stplitStrArrCount)
        console.log("Square of the number of words in the given string is : "+Square(stplitStrArrCount))
        
    }
    var stringOpOutput=stringOp();