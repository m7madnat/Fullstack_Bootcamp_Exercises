function isString(str, callback) {
  if (typeof str === "string") {
    callback(true);
  } else {
    callback(false);
  }
}

isString("Hello",  (result) => {
    console.log(result);
    }
);

isString(123, (result) => {
    console.log(result);
    }
);

function firstWordUpperCase(str, callback) {
    let newStr = str.split(" ");
    console.log("haha",newStr);
    newStr[0] = newStr[0].toUpperCase();
    newStr = newStr.join(" ");
   
    callback(newStr);
  }
  
  firstWordUpperCase("hello world", (result) => {
      console.log(result);
      }
    );

function reverseString(str, callback) {
    let newStr = str.split("").reverse().join("");
    callback(newStr);
  }

reverseString("hello world",  (result) => {
    console.log(result);
    }
    );
