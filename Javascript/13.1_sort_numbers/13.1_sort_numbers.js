const numbers = [1, -5, 666, 2, 400, 11];


// Sort the array of numbers from descending to ascending order.
numbers.sort((a, b) => a - b);
console.log('ascending order',numbers);


//Sort the array of numbers from ascending to descending order
numbers.sort((a, b) => b - a);
console.log('descending order',numbers);

