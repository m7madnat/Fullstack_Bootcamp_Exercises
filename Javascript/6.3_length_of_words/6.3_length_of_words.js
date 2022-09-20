let arrOfStrings =["boo", "doooo", "hoo","ro"]

function lengthOfWords(arrOfStrings) {
    let arrOfNumbers = [];
    for (let i = 0; i < arrOfStrings.length; i++) {
      arrOfNumbers.push(arrOfStrings[i].length);
    }
    return arrOfNumbers;
  }
  console.log(lengthOfWords(arrOfStrings));