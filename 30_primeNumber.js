
function isPrime(num){
for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return false
    }
}
return true
}
var result = isPrime(3);
console.log(`Given num 3 is prime num : ${result}`);
var result = isPrime(9);
console.log(`Given num 9 is prime num : ${result}`);
var result = isPrime(7);
console.log(`Given num 7 is prime num : ${result}`);
var result = isPrime(6);
console.log(`Given num 6 is prime num : ${result}`);
var result = isPrime(19);
console.log(`Given num 19 is prime num : ${result}`);
var result = isPrime(29);
console.log(`Given num 29 is prime num : ${result}`);
var result = isPrime(53);
console.log(`Given num 53 is prime num : ${result}`);
console.log("============== END ==============");