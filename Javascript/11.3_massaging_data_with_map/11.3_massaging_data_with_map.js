const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];



const names = (arr) => arr.map((val) => val.name);
console.log(names(data));

const birthdays = (arr) => {
    const older = [];
    arr.forEach((person) => {
        if (Number(person.birthday.split("-")[2]) < 1990) {
            older.push(person);
        }
    });
    return older;
};
console.log(birthdays(data));


const getFoods = (arr) => {
    const foodObj = {};
    arr.forEach((person) => {
        Object.values(person.favoriteFoods)
            .join(",")
            .split(",")
            .forEach((food) => {
                foodObj[food] = foodObj[food] ? foodObj[food] + 1 : 1;
            });
    });
    return foodObj;
};
console.log(getFoods(data));


