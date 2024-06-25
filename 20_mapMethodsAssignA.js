console.log("================ Step 1 ================");
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const newArray = arrayNumbers.map( (element)=> {
    return element + 10
} )
console.log(newArray);
console.log("================ Step 2 ================");
const newArr = arrayNumbers.map( (element) => {
return element * element * element
})
console.log(newArr);
console.log("================ Step 3 ================");
let array = arrayNumbers.map( (element,index)=>{
    return element + index
} )
console.log(array);
console.log("================== End ==================");