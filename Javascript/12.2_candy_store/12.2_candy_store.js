const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    return candyStore.candies.find((candy) => candy.id === id);
}

    
function getPrice(candyStore, id) {
    return getCandy(candyStore, id).price;
}


function addCandy(candyStore, id, name, price) {
    let candy = getCandy(candyStore, id);
    candy
        ? candyStore.candies[candyStore.candies.indexOf(candy)].amount++
        : candyStore.candies.push({
              name: name,
              id: id,
              price: price,
              amount: 1,
          });
}

function buy(candyStore, id) {
    let candy = getCandy(candyStore, id);
    if (candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount--;
    }
}


console.log(getCandy(candyStore, "5hd7y")); 
console.log(getPrice(candyStore, "5hd7y")); 

addCandy(candyStore, "1337a", "fireworks", 4);
console.log('add',getCandy(candyStore, "1337a")); 
buy(candyStore, "1337a");
console.log( 'Buy', getCandy(candyStore, "1337a")); 
buy(candyStore, "5hd7y");
console.log('Buy',getCandy(candyStore, "5hd7y")); 
console.log(candyStore.cashRegister); 

