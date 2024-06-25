
console.log("==== Step 1 ====");
var isEvenOrOdd = function(num){
    if (num%2==0) {
       return "EVEN"
    } else {
        return "ODD"
    }
}
var num = isEvenOrOdd(70);
console.log(`Given num 70 is ${num}`);
var num = isEvenOrOdd(45);
console.log(`Given num 45 is ${num}`);
var num = isEvenOrOdd(67);
console.log(`Given num 67 is ${num}`);
var num = isEvenOrOdd(98);
console.log(`Given num 98 is ${num}`);

console.log("==== Step 2 ====");
var Eligibility = function(age){
if (age>=18) {
    return "Eligible"
} else {
    return "Not Eligible"
 }
}
var age = Eligibility(18);
console.log(`Your age is 18 you are ${age} for vote`);
var age = Eligibility(20);
console.log(`Your age is 20 you are ${age} for vote`);
var age = Eligibility(17);
console.log(`Your age is 17 you are ${age} for vote`);
var age = Eligibility(40);
console.log(`Your age is 40 you are ${age} for vote`);

console.log("==== Step 3 ====");
var strLength = function(str){
    if (str.length>=10) {
        return "Contain 10 or more than 10 char"
    } else {
        return "Does not contain 10 or more than 10 char"
    }
}
var str = strLength("JavaScript");
console.log(`String "JavaScript" ${str}`);

console.log("==== Step 4 ====");
var string = function(str){
if (str.startsWith("Java")) {
    console.log(`Given string ${str} starts with "Java"`);
} else {
    console.log(`Given string ${str} does not starts with "Java"`);
} 
}
string("JavaScript Language");
string("Programming Language");

