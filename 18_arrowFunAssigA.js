
console.log("============== Step 1 ================");
let friend = () =>{
console.log("Good Morning, Today is Friday");
}
friend();

console.log("============== Step 2 ================");

let multiply = (n1,n2,n3=1) =>{
const result = n1*n2*n3;
console.log(`Multiplication of this number is : ${result}`);
}
multiply(5,5,2);
multiply(10,4);

console.log("============== Step 3 ================");
console.log(`------- Addition of 5 number ---------`);
let add = (n1,n2,n3,n4,n5) => {
    const result = n1+n2+n3+n4+n5;
    console.log(`Addition of number : ${result}`);
}
add(100,100,200,349,756);

console.log(`--------- Addition of 5 word ---------`);
let string = (arg) => {
    const result = arg;
    console.log(`Addition of word : ${result}`);
    return(result);
}
string("I am learning ES6 feature in depth.");

