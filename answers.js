// Write a function that takes a string and returns the first character of the string.
function firstChar(str) {
    return str[0];
}

console.log(firstChar(""));
console.log(firstChar("Hello!"));
console.log(firstChar("1994"));


// Write a function that takes a string and returns the last character of a string. 
function lastChar(str) {
    return str[str.length - 1];
}

console.log(lastChar(""));
console.log(lastChar("Hello!"));
console.log(lastChar("1994"));


/* Write a function that takes a string and a number, and returns 
the character at the position represented by the number. The indexing of 
number should start at 0. */
function charAtNumber(str, number) {
    return str[number];
}

console.log(charAtNumber("", 0));
console.log(charAtNumber("Kash", 2));
console.log(charAtNumber("1994", 1));


// Write a function that takes two numbers and adds them together.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(1, 2));
console.log(addTwoNumbers(99, 650));
console.log(addTwoNumbers(5, "dog"));
/* When you pass something other than a number to the function, 
the two inputs concatenate. */


// Write a function that takes two numbers and multiplies them together.
function multiplyTwoNumbers(num1, num2) {
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
function twoNumbersAndString(num1, num2, str) {
    if (str === "add") {
        return num1 + num2;
    }
    if (str === "subtract") {
        return num1 - num2;
    }
    if (str === "mult") {
        return num1 * num2;
    }
    if (str === "div") {
        return num1 / num2;
    }
    else {
        return 0;
    }
}

console.log(twoNumbersAndString(8, 4, "add"));
console.log(twoNumbersAndString(8, 4, "subtract"));
console.log(twoNumbersAndString(8, 4, "mult"));
console.log(twoNumbersAndString(8, 4, "div"));
console.log(twoNumbersAndString(8, 4, "modulo"));


/* Write a function that takes a string and a number, and returns the string 
repeated that many number of times. */
function sameStringManyTimes(str, num) {
    var i = 0;

    while (i < num) {
        console.log(str);
        i++;
    }
}

sameStringManyTimes("Hi!", 5);
sameStringManyTimes("Kash", 3);
sameStringManyTimes("8", 8);


/* Write a function that takes a string, and returns the reverse of that 
string. For example, if you pass the function the string “hello”, it should 
return “olleh”. */

//Using a while loop
function reverseString(str) {
    // i is the end of my string
    var i = str.length;
    var initial = '';
    while (i > 0) {
        initial = initial + str.substring(i - 1, i);
        i--;
    }
    return initial;
}

console.log(reverseString("Hello"));
console.log(reverseString("dog"));
console.log(reverseString(""));


//Using a for loop
function reverseStringForLoop(str) {
    var initial = "";
    for (var i = str.length; i > 0; i--) {
        initial = initial + str.substring(i - 1, i);
    }
    return initial;
}

console.log(reverseStringForLoop("Hello"))
console.log(reverseStringForLoop("dog"));
console.log(reverseString(""));

// Below is the short way shown by Codrin using methods
//console.log('hello'.split("").reverse().join(''));


/* Write a function that takes a number and returns the factorial of a number. 
The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. */
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    var operation = 1; // Note to self: don't forget to define variables
    for (var i = 1; i <= num; i++) {
        operation = operation * i;
    }
    return operation;
}

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(-5));


/* Write a function that takes a phrase as a string, and returns the longest 
word in that phrase. If the phrase contains more than one such word, return the
first occurrence. */
function longestWord (phrase) {
    var words = phrase.split(" ");
    var maxLength = "";
    
    for (var i = 0; i < words.length; i++){
        if (words[i].length > maxLength.length) {  //because we're comparing a number to a number make sure to convert to .length
            maxLength = words[i];
        }
    }
    return maxLength;
}

console.log(longestWord("I live in Montreal."));
console.log(longestWord("Dinosaurs has the same amount of letters as bumblebee"));



/* Write a function that takes a phrase, and returns the same phrase with every 
word capitalized. For example, if you pass your function "hello world", it 
should return “Hello World” and if you pass it “HELLO WORLD” or 
even "HeLLo WoRLD", it will also return "Hello World". Test your function of 
a few inputs. */
function capitalizedPhrase (str) {
    var words = str.toLowerCase().split(" ");
    var i = 0;
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

console.log(capitalizedPhrase("heLlO everYone"));
console.log(capitalizedPhrase("THIS WAS DIFFICULT"));
console.log(capitalizedPhrase("la la la"));


/* Write a function that takes an array and returns the largest number of the 
array. Test your function on a few inputs. */
function largestNumber (arr) {
    var largestNum = 0;
    var i = 0;
    for (i=0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return largestNum;
}


console.log(largestNumber([1, 2, 10, 4, 8, 5]));
console.log(largestNumber([300, 999, 1000]));
console.log(largestNumber([0, -2, 1, 0]));
