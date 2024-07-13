
console.log("===============================================================================");

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
} 
const yesBank = new Bank("Yes Bank", "Sangola", "YESB0BMSB13", 1230);
console.log(`Yes Bank Details : ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);

const sbiBank = new Bank("SBI Bank", "Solapur", "SBIN0000483", 4560);
console.log(`SBI Bank Details : ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);

const mahBank = new Bank("MAH Bank", "Sangola", "MAHB0001467", 7890);
console.log(`MAH Bank Details : ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank", "Sangola", "UTIB0003816 ", 8520);
console.log(`Axis Bank Details : ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log("===============================================================================");
console.log(`SBI Bank open time : ${sbiBank.openTime} and It's close time : ${sbiBank.closeTime}`);
console.log("===============================================================================");
console.log(`Bank Name is : ${axisBank.bankName} and It's close time : ${axisBank.closeTime}`);
console.log("===============================================================================");
console.log(`Bank Name is : ${yesBank.bankName}, Branch Code is : ${yesBank.branchCode} and It's open time : ${yesBank.openTime}`);
