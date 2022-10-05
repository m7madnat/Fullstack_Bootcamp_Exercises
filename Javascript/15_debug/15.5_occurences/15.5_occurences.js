function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
           counter = counter + 1;
        }
    }
    return counter;
}
// countOccurrences("ini mini miny moe", "n");
console.log(countOccurrences("ini mini miny moe", 'n'));


//the first parameter is the string, the second parameter should be char not string
//the second problem in line 5 they dont increase the counter
//Using the debugger line by line, I see that the counter didnt change as i expect.