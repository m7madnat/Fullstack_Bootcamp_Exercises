function steps(n){
    let step = new Array(n).fill(" "); // create an array with n elements and fill it with spaces
    for (let i = 0; step.indexOf(" ") !== -1; i++) { // while there are spaces in the array
        step[i] = "#"; // replace the space with a hash
        console.log(`'${step.join("")}'`); // join the array into a string and log it
    }
};

steps(4);
