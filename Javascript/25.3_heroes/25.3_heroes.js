const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
    // for (let hero of heroes) { // first way
    //     printFunc.call(hero);
    // }
    heroes.forEach(hero => { // second way
        printFunc.apply(hero)
    });    
}

printHeroes(superHeroes, printName);


// Bind - to create a new func with the "this" replaced with…
// Use .bind() when you want that function to Later be calLed with a
// certain context, useful in events.
// Use .calL() or .apply() when you want to invoke the function
// immediately, and modify the context.