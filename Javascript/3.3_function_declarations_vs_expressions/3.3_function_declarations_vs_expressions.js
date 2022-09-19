console.log('function declarations : ');

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
console.log(china);
const spain = percentageOfWorld1(47);
console.log(spain);
const usa = percentageOfWorld1(332);
console.log(usa);


console.log('--------------------------------')
console.log('function expression : ');

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const china2 = percentageOfWorld2(1441);
console.log(china2);
const spain2 = percentageOfWorld2(47);
console.log(spain2);
const usa2 = percentageOfWorld2(332);
console.log(usa2);
