const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.myFind = function (callback) {

        for (let i = 0; i < this.length; i++) {
          if (callback(this[i]))
            return this[i];
        }  
}

Array.prototype.myReduce = function (callback) {
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}



console.log(arr.myFilter((n) => n % 2)); // [1, 3, 5, 7, 9]
console.log(arr.myFind((n) => !(n % 3)));  // 3
console.log(arr.myReduce((sum, n) => sum + n)); // 45
console.log(arr.myReduce((sum, n) => Math.abs(sum - n))); // 5

