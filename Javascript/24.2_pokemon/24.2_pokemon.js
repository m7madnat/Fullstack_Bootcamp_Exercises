function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(attackNumber){

    console.log(`${this.name} used ${this.attackList[attackNumber]}`)
}

const pikachu = new Pokemon("Pikachu", "Electric" , ["Thunder Shock", "Thunderbolt"]);
const charmander = new Pokemon("Charmander", "Fire" , ['Flamethrower','Fire Blast'])

pikachu.callPokemon()
pikachu.attack(0)
pikachu.attack(1)
charmander.callPokemon()
charmander.attack(0)
charmander.attack(1)

