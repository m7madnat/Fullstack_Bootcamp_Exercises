function validatePasswordIfElse(password){
    if(password.length > 7){
        return 'Strong';
    }
    else{
        return 'Weak';
    }
}

function validatePasswordternary(password){   
     return password.length > 7 ? 'Strong' : 'Weak';
}

function validatePasswordLogical(password){
    return (password.length > 7) && 'Strong' || 'Weak';
}

function validatePasswordAdvanced(password){
    let longpassword = password.length >= 7;
    return longpassword ? /.*[A-Z].*/.test(password) ? 'Very Strong' : 'Strong' : 'Weak';
}

console.log(validatePasswordIfElse('mohamednAT')); // Output => Strong
console.log(validatePasswordIfElse('momed')); // Output => Weak

console.log(validatePasswordternary('12345678')); // Output => Strong
console.log(validatePasswordternary('momed')); // Output => Weak

console.log(validatePasswordLogical('12345678')); // Output => Strong
console.log(validatePasswordLogical('momed')); // Output => Weak

console.log(validatePasswordAdvanced('12345678AB')); // Output => Very Strong
console.log(validatePasswordAdvanced('1234567')); // Output => Strong
console.log(validatePasswordAdvanced('momed')); // Output => Weak