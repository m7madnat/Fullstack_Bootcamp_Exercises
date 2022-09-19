/*
JavaScript - Declaring Functions

The following exercise contains the following subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit return functions.

Submit the file to Hive
*/
// From function declarations to explicit and implicit return functions (one of each).

// explicit return
const welcome = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

// implicit return
const power = a => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

console.log(welcome());
console.log(power(2));


// From function expressions to IIFE functions.
(() => {
    console.log(Math.sqrt(16));
})();


console.log((() => Math.random() * (61 - 34) + 34)());

