function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`
}

let first = describeCountry('Spain','47 million','Madrid');
let second = describeCountry('France','67.39 million','Paris');
let third = describeCountry('USA','329.5 million','Washington DC');

console.log(first);
console.log(second);
console.log(third);