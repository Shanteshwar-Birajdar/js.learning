console.log(`============== Array ==============`);
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruits_seasonal);
const length = fruits_seasonal.length;
console.log(`Length of array is : ${length}`);
const index = [fruits_seasonal.length-1];
console.log(`Index of array is : ${index}`);

console.log(`==== Accessing 1st & Last Element ====`);
let element0th = fruits_seasonal[0];
console.log(`First element : ${element0th}`);
const len = fruits_seasonal.length;
console.log(`Last element : ${fruits_seasonal[len-1]}`);

console.log(`==== Add element on beginning of array ====`);
fruits_seasonal.unshift("Papaya");
console.log(`After unshift the element : [${fruits_seasonal}]`);

console.log(`==== Add element at last of array ====`);
fruits_seasonal.push("Pineapple");
console.log(`After push the element : [${fruits_seasonal}]`);

console.log(`========= After all changes log the array =========`);
console.log(fruits_seasonal);
const leng = fruits_seasonal.length;
console.log(`Length of array is : ${leng}`);
console.log(`====================== END ======================`);
