
console.log("==== Task 1 ====");
var greaterNUm = function(numOne,numTwo){
    var result = numOne>=numTwo ? numOne : numTwo ;
    console.log(`Greater number from number ${numOne}, ${numTwo} is ${result}`);
}
greaterNUm(10,-10)
greaterNUm(800,899)

console.log("==== Task 2 ====");
var isEvenOrOddNum = function(argOne){
var result = argOne%2 == 0 ? true : false ;
return result
}

var returnvalue = isEvenOrOddNum(29);
console.log(`Given number 29 is even : ${returnvalue}`);
var returnvalue = isEvenOrOddNum(40);
console.log(`Given number 40 is even : ${returnvalue}`);
var returnvalue = isEvenOrOddNum(0);
console.log(`Given number 1 is even : ${returnvalue}`);
var returnvalue = isEvenOrOddNum(101);
console.log(`Given number 101 is even : ${returnvalue}`);
var returnvalue = isEvenOrOddNum(100);
console.log(`Given number 100 is even : ${returnvalue}`);


