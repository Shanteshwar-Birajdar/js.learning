console.log(`==== Count the total number of "a" character ====`);
var word = "Javascript";
var counter = 0;
for (let index = 0; index < word.length; index++) {
var ch = word.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of "a" in ${word} is : ${counter}`);

console.log(`==== Count the total number of Vowels ====`);
var str = "I am very a good IT developer";
var Vowels = "aeiou";
counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (Vowels.includes(chLowerCase)) {
        counter ++
    }
    }
console.log(`Total number of vowels is : ${counter}`);
