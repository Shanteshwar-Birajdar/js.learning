
console.log(`======== WAP to print numbers from 0 to 10==============`);
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

console.log(`======== WAP to print numbers from 10 to 0 ==============`);
for (let index = 10; index >= 0; index--) {
    console.log(index); 
}

console.log(`======== WAP to print numbers from 0 , 2, 4, till 10  ==============`);
for (let index = 0; index <= 10; index= index+2) {
    console.log(index); 
    
}

var dayNum = 3;
switch (dayNum) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log(`Invalid value ${dayNum}`);
    break;
    
}
