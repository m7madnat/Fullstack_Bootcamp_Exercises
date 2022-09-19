function gradeAssigner(score) {
    if (score <= 64) {
        return "F";
    }
    else if (score <= 69) {
        return "D";
    }
    else if (score <= 79) {
        return "C";
    }
    else if (score <= 89) {
        return "B";
    }
    else{
        return "A";
    }
}

console.log(gradeAssigner(100));
console.log(gradeAssigner(12));
console.log(gradeAssigner(68));
console.log(gradeAssigner(78));