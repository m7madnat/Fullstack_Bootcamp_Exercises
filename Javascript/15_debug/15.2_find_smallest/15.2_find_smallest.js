function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (b > a && c > a) {
        return a;
    } else {
        return b;
    }
}
console.log(findSmallest(52, 66, 2));

//the function call contains a wrong name 
//in line 2 we need to change the if statement to if (a > b && b > c) and return c;     
//in line 4 we need to change the else if statement to else if (b > a && c > a) and return a;  