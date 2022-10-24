const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero))); // I am stronger


// console.log(whoIsStronger(hero.getStrength)); // You are stronger

// Bind - to create a new func with the "this" replaced with…
// Use .bind() when you want that function to Later be calLed with a
// certain context, useful in events.
// Use .calL() or .apply() when you want to invoke the function
// immediately, and modify the context.