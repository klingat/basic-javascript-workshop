// Write a function that takes a string and returns the first character of the string.
function firstChar (str) {
    return str[0];
}

console.log(firstChar(""));
console.log(firstChar("Hello!"));
console.log(firstChar("1994"));


// Write a function that takes a string and returns the last character of a string. 
function lastChar (str) {
    return str[str.length - 1];
}

console.log(lastChar(""));
console.log(lastChar("Hello!"));
console.log(lastChar("1994"));


/* Write a function that takes a string and a number, and returns 
the character at the position represented by the number. The indexing of 
number should start at 0. */
function charAtNumber (str, number) {
    return str[number];
}

console.log(charAtNumber("", 0));
console.log(charAtNumber("Kash", 2));
console.log(charAtNumber("1994", 1));


// Write a function that takes two numbers and adds them together.
function addTwoNumbers (num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(1, 2));
console.log(addTwoNumbers(99, 650));
console.log(addTwoNumbers(5, "dog"));
/* When you pass something other than a number to the function, 
the two inputs concatenate. */


// Write a function that takes two numbers and multiplies them together.
function multiplyTwoNumbers (num1, num2) {
    return num1 * num2;
}

console.log(multiplyTwoNumbers(1, 2));
console.log(multiplyTwoNumbers(99, 650));
console.log(multiplyTwoNumbers(5, "dog"));
// When you pass something other than a number to the function, it outputs NaN.


/* Write a function that takes two numbers and a string. If the string is ‘add’, 
then return the sum of the numbers. If the string is ‘subtract’, return the 
difference. If the string is ‘mult’, return the product. If the string is ‘div’, 
return the ratio. Otherwise return 0. */
function twoNumbersAndString (num1, num2, str) {
    if (str === "add") {
        return num1 + num2;
    } if (str === "subtract") {
        return num1 - num2;
    } if (str === "mult") {
        return num1 * num2;
    } if (str === "div") {
        return num1 / num2;
    } else {
        return 0;
    }
}

console.log(twoNumbersAndString(8, 4, "add"));
console.log(twoNumbersAndString(8, 4, "subtract"));
console.log(twoNumbersAndString(8, 4, "mult"));
console.log(twoNumbersAndString(8, 4, "div"));
console.log(twoNumbersAndString(8, 4, "modulo"));