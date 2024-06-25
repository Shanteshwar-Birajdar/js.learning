console.log("================ Step 1 ================");
console.log("========== Greater Than 50 ==========");
let array = [20,11,40,25,37,49,9,90,60,2,19];
const newArray = array.filter ( (element)=> {
return element>50
})
console.log(newArray);
console.log("================ Step 2 ================");
console.log("========== All Even numbers ==========");
const newArr = array.filter ( (element) =>{
return element%2==0
} )
console.log(newArr);
console.log("================ Step 3 ================");
console.log("========== All Odd numbers ==========");
const newArra = array.filter ( (element)=> {
    return element%2==1
} )
console.log(newArra);
console.log("================ Step 4 ================");
console.log("========== Multiple Of 5 numbers ==========");
const arrayNumbers = array.filter ( (element)=>{
    return element%5==0
} )
console.log(arrayNumbers);
console.log("================ Step 5 ================");
console.log("========== Numbers Bet 20 & 50 ==========");
const arrayNumber = array.filter ( (element)=>{
    return element>=20 && element<=50;
} )
console.log(arrayNumber);
console.log("================== End ==================");
