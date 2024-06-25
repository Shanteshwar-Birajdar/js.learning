
function isEven(num){
    console.log(`Before if block`);
    if (num%2==0) {
        console.log(`EVEN Number`);
    }
    console.log(`After if block`);
}
isEven(10);
isEven(90);
isEven(1017);
isEven(1020);

console.log(`====== if else block =========`);
var isEvenOrOdd = function(num){
    if (num%2==0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}
isEvenOrOdd(3);
isEvenOrOdd(90);