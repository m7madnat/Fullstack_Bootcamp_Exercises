/* Block 1 */

(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a);
    })(1);
})(0);


//  immediateA receives 0 as the argument and assigns it to variable a.
//  immediateA receives 1 as the argument and assigns it to variable b.
//  when logging a it can't find it in immediateB so looks in the parent
//  and gets immediateA's a. logs 0


