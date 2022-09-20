function array(removeDublicates) {
    let newArray = [];
    for (let i = 0; i < removeDublicates.length; i++) {
        if (newArray.indexOf(removeDublicates[i]) === -1) {
            newArray.push(removeDublicates[i]);
        }
    }
    return newArray;
}
console.log(array([3,4,4,3,6,3]));