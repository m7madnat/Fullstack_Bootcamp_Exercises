function calcAverage(arr) {
    var sum =0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// calcAverage([85, 90, 92]);
console.log(calcAverage([85, 90, 92]));

// the function returns the sum of the array elements, not the average
// so we need to change the function to return avg/arr.length;
// and in line 2, we need to give avg a value, or it will be undefined
