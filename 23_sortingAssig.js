console.log("=============== Given Array ===============");
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`Array is : [${arrayRollNumbers}]`);
console.log("=============== Reverse the Array ===============");
arrayRollNumbers.reverse();
console.log(`Reverse array is : [${arrayRollNumbers}]`);
console.log("======== Sort method without using custom logic ========");
arrayRollNumbers.sort();
console.log(`[${arrayRollNumbers}]`);
console.log(`======== Sorting in ascending order ========`);
arrayRollNumbers.sort ( (n1,n2) => {
    return n1>n2 ? 1 : -1
});
console.log(arrayRollNumbers);
console.log(`======== Greatest Number from Array ========`);
