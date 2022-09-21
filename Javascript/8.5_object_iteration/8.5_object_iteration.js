function swap(obj) {
    let newObj = {};  
    for (let key in obj) { //go over all the properties of the object
        newObj[obj[key]] = key; //swap key and value
    }
    return newObj; 
}

const obj = {
    name: "mohamed",
    age: "23"
};
console.log('Before: ' ,obj);
console.log('After: ', swap(obj));