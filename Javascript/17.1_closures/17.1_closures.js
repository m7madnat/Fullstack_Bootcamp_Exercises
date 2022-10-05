// var b = 1;

// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9); //we save the return of someFunction(9), which is otherfunction (as a declaration).
// var result = firstResult(2); //as when calling firstResult(2), we are actually calling otherFunction(2), which returns b, which is defined as 5 in that scope.
// console.log(result);

// Without running the code, I think the output is:

// result = 5

// var a = 1;

// function b2() {
//     a = 10;
//     return;

//     // function a() {}
// }
// b2();
// console.log(a);


// result = 1

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

