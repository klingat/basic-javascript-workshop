// Write a function that takes a string and returns the first character of the string.

function firstChar (string) {
    return string[0];
}

console.log(firstChar(""));
console.log(firstChar("Hello!"));
console.log(firstChar("1994"));

// Write a function that takes a string and returns the last character of a string. 

function lastChar (string) {
    return string[string.length - 1];
}

console.log(lastChar(""));
console.log(lastChar("Hello!"));
console.log(lastChar("1994"));

/* Write a function that takes a string and a number, and returns 
the character at the position represented by the number. The indexing of 
number should start at 0. */

function charAtNumber (string, number) {
    return string[number];
}

console.log(charAtNumber("", 0));
console.log(charAtNumber("Kash", 2));
console.log(charAtNumber("1994", 1));