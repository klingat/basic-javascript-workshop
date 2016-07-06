/* Challenge: create a file called fortune.js in your Cloud9 project. 
Running this file should output a random quote from a list of 10 different 
quotes. */ 

var quotes = ["Work hard. Dream big.",
"Life is short. Live passionately.",
"Life is a one time offer, use it well.",
"The trouble is you think you have time.",
"So it goes.",
"Shit happens.",
"Whatever you are, be a good one.",
"Be the change you wish to see in the world.",
"Love the life you live, and live the life you love.",
"Live each day as if it’s your last."];

function fortuneTeller (n) {
    n = Math.floor(Math.random() * 10);
    return quotes[n];
}

console.log(fortuneTeller());