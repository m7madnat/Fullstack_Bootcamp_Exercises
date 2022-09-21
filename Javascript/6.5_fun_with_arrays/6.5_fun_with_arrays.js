// Fill an array with 100 of the same object using the array fill method.
let arr1 = new Array(100).fill({name: "Mohamed"});
console.log(arr1);

//Create an array with numbers ranging from 1-100 using the Array.from method.

const iterArr = Array.from({length: 100}, (_, i) => i ); // The use an ( _ ) character to denote that we don't need the first
console.log(iterArr);                                  // parameter of the function, which is the value of the array element.  


const myObj = {
    one: 1,
    two: 2,
    three: 3,
};


const myArray = Object.values(myObj);
console.log(myArray);


const newObj = Object.assign({}, myArray);
console.log(newObj);


console.log(myArray instanceof Array);

const copyArray = myArray.concat();
console.log(copyArray);

const linkedArray = myArray;
console.log(linkedArray);


