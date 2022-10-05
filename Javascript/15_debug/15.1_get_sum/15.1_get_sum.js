function getSum(arr1, arr2) {
    // const sum = 0;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1, 2, 3],[5, 66, 23]));

// the first problem is when we give the function two arrays we dont have coma between them so the function will not work so we get error in line 3 
// the second problem is in line 4 with the const sum = 0; we cant change the value of const so we need to change it to let sum = 0
// the third problem is in line 11 we need to return the sum of the two arrays so we need to add return sum
// i used the chrome dev tools to debug the code and i found the problems 

