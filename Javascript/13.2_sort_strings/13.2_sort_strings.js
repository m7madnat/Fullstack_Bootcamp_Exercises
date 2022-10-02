const foods = ["falafel", "sabich", "hummus","pizza with extra pineapple"];

const ascendingFoods = foods.slice().sort();
console.log('ascendingFoods',ascendingFoods);

const descendingFoods = foods.slice().sort().reverse();
console.log('descendingFoods',descendingFoods);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

const sortedFoods = foodsWithUpperCase.slice().sort();
console.log('sortedFoods',sortedFoods);

const sortedFoodsDesc = foodsWithUpperCase.slice().sort().reverse();
console.log('sortedFoodsDesc',sortedFoodsDesc);

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];


const sortedWords = words.slice().sort((a,b) => a.length - b.length);
console.log('sortedWords',sortedWords);