const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];


function compareArrays(arr1, arr2) { 
    let newArr = []; 
    for (let i = 0; i < arr1.length; i++) { 
        for (let j = 0; j < arr2.length; j++) { 
            if (arr1[i] === arr2[j]) { // if the element of the first array is equal to the element of the second array
                newArr.push(arr1[i]); // push the element to the new array
            }
            else 
            {
                return false;
            }
        }
    }
    return newArr; 
}
console.log(compareArrays(food, food1)); 

