console.log(`========== Sum the number of 1 to 5 ==========`);
var sum = 0;
for (let i = 1; i<= 5; i++) {
sum = sum + i;  
}
console.log(sum);

console.log(`========== Sum the even number from 0 to 50 ==========`);
var sumOdd = 0;
for (let index = 0; index <= 50; index= index+2) {
    sumOdd = sumOdd + index;
}
console.log(sumOdd);

console.log(`========== Sum of cube of numbers from 1 to 5 ==========`);
function sumOfCube(){
    var sumOfCube = 0;
    for (let index = 1; index <= 5; index++) {
       var cube = index * index * index ;
        sumOfCube = sumOfCube + cube
    }
    console.log(sumOfCube);
}
sumOfCube();

function oddPositionChars (str){
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
if (index%2==1 && ch != ' ') {
   console.log(ch); 
}
    
}
}
oddPositionChars("Hard work always pay back");
oddPositionChars("Soon i will be UI IT champ");