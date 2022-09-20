function darkorlight(color) {
    switch (color) {
        case "yellow":
        case "Yellow":
        case "pink":
        case "Pink":
        case "orange":
        case "Orange":
            console.log("light color");
            break;
        case "blue":
        case "Blue":
        case "purple":
        case "Purple":
        case "brown":
        case "Brown":
            console.log("dark color");
            break;
        default:
            console.log("unknown color");   
            break; 
    }
}
darkorlight("yellow"); // Output => light color
darkorlight("Blue"); // Output => dark color
darkorlight("red"); // Output => unknown color

