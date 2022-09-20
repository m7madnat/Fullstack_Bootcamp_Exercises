let populations = [45,1402,332,12];
function populationPercentages(populations){
    let percentages = []; 
    for (let i = 0; i < populations.length; i++) {
        percentages.push(percentageOfWorld1(populations[i]));
    }
    return percentages;
}
console.log(populationPercentages(populations));


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}