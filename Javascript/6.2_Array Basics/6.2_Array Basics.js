const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.shift('Greg');
console.log(people);

people.pop('James');
console.log(people);

people.unshift('Matt');
console.log(people);

people.push('Mohamed');
console.log(people);

for (let i = 0; i < people.length; i++) { 
    if (people[i] === 'Mary') {
        console.log(people[i]);
        break;
    }
} 

const people2 = people.slice(2);
console.log(people2);

console.log(people.indexOf('Mary')); 

console.log(people.indexOf('Foo')); // -1

console.log(people);
people.splice(2, 1, 'Elizabeth', 'Artie'); // remove 1 element at index 2 and add 'Elizabeth' and 'Artie'
console.log(people);

const withBob = people.concat('Bob'); 
console.log(withBob);