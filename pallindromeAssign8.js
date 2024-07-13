
function isPalindrome(str) {
    let reversestr = str.split("").reverse().join("");
    if (str==reversestr) {
        console.log(`Given string is palindrome : ${str}`);
    } else {
        console.log(`Given string is not palindrome : ${str}`);
    }

}
isPalindrome("JavaScript");
isPalindrome("DO or Die");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");