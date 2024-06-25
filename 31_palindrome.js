
console.log("========= Palindromes =========");
console.log("[madam,141,sunday,mom,listen,dad]");
console.log("======== Given string is palindrome or not ========");
function isPalindrome(str) {
    let reversestr = str.split("").reverse().join("");
    if (str==reversestr) {
        console.log(`Given string is palindrome : ${str}`);
    } else {
        console.log(`Given string is not palindrome : ${str}`);
    }

}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
console.log("================ END ===============");