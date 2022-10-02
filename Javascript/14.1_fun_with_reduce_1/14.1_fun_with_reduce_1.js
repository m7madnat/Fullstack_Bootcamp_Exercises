const numbers = [16,32,88,1,23,17];

function max(arr){
    return arr.reduce((max,currval) => max > currval ? max : currval);
}
console.log('Max Number: ',max(numbers)); //88

function sumeven(arr){
    return arr.reduce((sum,currval) => currval % 2 === 0 ? sum + currval : sum);
}
console.log('Sum even numbers:',sumeven(numbers)); // 16 + 32 + 88 = 136

function avg(arr){
    return arr.reduce((sum,currval) => sum + currval)/ arr.length;
}
console.log('Average of numbers:',avg(numbers)); // 32.33
