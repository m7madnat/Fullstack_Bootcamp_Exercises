function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}
funcA();
// Without running the code,  I think the output is:
// undefined
// 2

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// Without running the code, I think the output is:

// Aurelio De Rosa
// Aurelio De Rosa

// after running the code, I was wrong. The output in the console is: Aurelio De Rosa 
// That's because the getFullName function got saved to a var and this lost its meaning



function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// Without running the code, I think the output is:

// undefined //cause no need to use let or var to declare a
// number


function funcC() {
    console.log("1");
}
funcC();

function funcC() {
    console.log("2");
}
funcC();

// Without running the code, I think the output is:
// 2
// 2

function funcD1() {
    d = 1;
}
funcD1();
console.log('d:' ,d);

// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);

// Without running the code, I think the output is:

// value of d : 1 
// Value of e : undefined and the code not work
// cause in function we dont need to use var or let to declare a variable


function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    console.log("Value of f in global scope: ", f);
    var f = 1;
funcE();

// Without running the code, I think the output is:
// global scope : undefined /// cause the variable f is declared after global scope
// local scope : 1