const numbers = [16,32,88,1,23,17];

function max(arr){
    return arr.reduce((max,currval) => max > currval ? max : currval);
}
console.log('Max Number: ',max(numbers)); //88

function sumeven(arr){
    return arr.reduce((sum,currval) => currval % 2 === 0 ? sum + currval : sum);
}

console.log('Sum even numbers:',sumeven(numbers)); // 16 + 32 + 88 = 136

// const arr = [16,32,88,1,23,17];
// const sumofevennumbers = (arr) =>{
//     return arr.reduce((acc,cur)=>{
//         if(acc % 2 === 0){
//             return acc + cur;
//         }
//         return acc; 
//     }, 0)
// }

// const res = sumofevennumbers(numbers);
// console.log('Sum of even numbers:',res);


function avg(arr){
    return arr.reduce((sum,currval) => sum + currval)/ arr.length;
}
console.log('Average of numbers:',avg(numbers)); // 32.33
