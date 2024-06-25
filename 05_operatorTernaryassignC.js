

console.log("==== Task 1 =====");
function maleMarriageEligibility(gender,age,name){
 var result = (gender=="Male" && age>=21) 
 ? `Hey ${name} you are eligible for marriage. ` 
 : `${name} you are underage, not eligible for marriage .`;
return result ;
}
var message = maleMarriageEligibility("Male",25,"Bill gates");
console.log(message);
var message = maleMarriageEligibility("Male",20,"Stew Jobs");
console.log(message);

console.log("==== Task 2 =====");
function FemaleMarriageEligibility(gender,age,name){
    var result = (gender=="Female" && age>=18) 
    ? `Hey ${name} you are eligible for marriage. ` 
    : `${name} you are underage, not eligible for marriage .`;
   return result ;
   }
   var message = FemaleMarriageEligibility("Female",16,"Jenifer");
   console.log(message);
   var message = FemaleMarriageEligibility("Female",27,"Malinda gates");
   console.log(message);
   