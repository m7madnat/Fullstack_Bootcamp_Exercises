const storm = {
    superPower: "invisibility",
    printSuperPower: printSuperPower
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printSuperPower();