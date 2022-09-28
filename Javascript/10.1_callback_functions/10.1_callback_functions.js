function isString(str, callback) {
  if (typeof str === "string") {
    callback(true);
  } else {
    callback(false);
  }
}

isString("Hello", function (result) {
    console.log(result);
    }
);

isString(123, function (result) {
    console.log(result);
    }
);

function firstWordUpperCase(str, callback) {
    let newStr = str.split(" ");
    console.log("haha",newStr);
    let firstWord = newStr[0].toUpperCase();
    let restOfWords = newStr.splice(1).join(" ");
    let result = firstWord + " " + restOfWords;
    callback(result);
  }
  
  firstWordUpperCase("hello world", function (result) {
      console.log(result);
      }
    );

function reverseString(str, callback) {
    let newStr = str.split("").reverse().join("");
    callback(newStr);
  }

reverseString("hello world", function (result) {
    console.log(result);
    }
    );
