function doubleValues(arr){
    return arr.map((val) => val * 2);
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        if(val % 2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr){
    return [arr[0], arr.at(-1)].map((val) => val.toString());
}

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    let vowels = "aeiou";
    splitArr.forEach((letter)=>{
        let lowerCasedLetter = letter.toLowerCase();
        if(vowels.indexOf(lowerCasedLetter) !== -1){
            if(obj[lowerCasedLetter]){
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

function capitalize(str){
    return str
        .split("")
        .map((letter) => letter.toUpperCase())
        .join("");
}

function shiftLetters(str){
    const charCodes = str
        .split(" ")
        .map((word) => word.split("").map((char) => char.charCodeAt()));
    let encoded = "";
    charCodes.forEach((word) => {
        word.forEach((code) => {
            if (code === 90 || code === 122) {
                code -= 26;
            }
            encoded += String.fromCharCode(code + 1);
        });
        encoded += " ";
    });
    return encoded;
}

function swapCase(str){
    return str
        .split(" ")
        .map((val, i) => (i % 2 === 0 ? val.toUpperCase() : val.toLowerCase()))
        .join(" ");
}

newArr = [1,2,3,4,5];
console.log(doubleValues(newArr));
console.log(onlyEvenValues(newArr));
console.log(showFirstAndLast(["apple", "seeds", "hello", "bye"]));
console.log(vowelCount("Elie"));
console.log(capitalize("this is an example"));
console.log(shiftLetters("hello"));
console.log(swapCase("Hello World I am programmer"));




