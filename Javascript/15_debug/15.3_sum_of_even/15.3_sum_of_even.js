function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    }
// getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

// index always starts from 0, so arr[2] is the third element in the array that equals 3
// and arr[10] is the eleventh element in the array that not exist
// so we need to change the function to return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
