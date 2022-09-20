function countryToLiveIn (language, isIsland, population, country) {
  if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}
countryToLiveIn('English', false, 49, 'Finland'); // Output => You should live in Finland

countryToLiveIn('Spanish', true, 42, 'Spain'); // Output => Spain does not meet your criteria