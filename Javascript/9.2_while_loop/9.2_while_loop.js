let populations = [45,1402,332,12];
function populationPercentages(populations){
    let percentages = []; 
    while (populations.length > 0){
        percentages.push(percentageOfWorld1(populations.shift()));
    }
    return percentages;
}
console.log(populationPercentages(populations));


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

