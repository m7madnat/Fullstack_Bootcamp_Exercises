const iterArr = Array.from({length: 100}, (_, i) => i); // The use an ( _ ) character to denote that we don't need the first
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


