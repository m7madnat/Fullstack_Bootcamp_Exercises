const mycountry = {
    country: 'Spain',
    capital: 'Madrid',
    language: 'Spanish',
    population: 46,
    neighbours: ['France', 'Portugal', 'Andorra', 'Morocco']
}

const describe = mycountry => {
    return `${mycountry.country} has ${mycountry.population} million people , their mother tongue is ${mycountry.language}, they have ${mycountry.neighbours.length} neighbouring countries and a capital called ${mycountry.capital}`
}

console.log(describe(mycountry));

const checkIsland = mycountry => {
   return mycountry.isIsland = mycountry.neighbours.length === 0 ? true : false
}

console.log(checkIsland(mycountry))

