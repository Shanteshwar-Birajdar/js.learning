console.log("================ Step 1 ================");
let arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((element,index) => {
   console.log(`Element at index value ${index} is ${element}.`); 
});
console.log("================ Step 2 ================");
console.log("=== Given Positive Numbers are ===");
arrayNumber.forEach((value)=>{
    if(value>=0){
        console.log(value);
    }
});
console.log("================ Step 3 ================");
console.log("=== Given Negative Numbers are ===");
arrayNumber.forEach((value)=>{
    if(value<=0){
        console.log(value);
    }
});
console.log("================ Step 4 ================");
console.log("=== Given Even Numbers are ===");
arrayNumber.forEach( (value)=> {
if (value%2==0) {
    console.log(value);
}
})
console.log("================ Step 5 ================");
console.log("=== Sum of all numbers are ===");
let sum = 0;
arrayNumber.forEach( (value) => {
    sum = sum + value;
} );
console.log(sum);
console.log("================ Step 6 ================");
console.log("=== Given Even index Numbers are ===");
arrayNumber.forEach( (value,index)=> {
if (index%2==0) {
    console.log(`Element at Even index ${index} is ${value}`);
}
})
console.log("================= End ==================");