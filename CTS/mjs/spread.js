// // //Spread Operator
// //Combining Arrays
//let shoppingCart = [345, 345, 765, 123];
//let newItems = [98, 123];

//Older way of doing it
//shoppingCart.push(newItems); //adds an array not just the values

//New way of doing it
//shoppingCart.push(...newItems); //adds the items into the array as separate values



// //Copying Arrays
//const shoppingCart = [345, 345, 765, 123];
//const updatedCart = [...shoppingCart];
//updatedCart.push(5);
//console.log(updatedCart);
//console.log(shoppingCart);

//const orderTotals = [1, 5, 1, 10, 2, 3];
//console.log(Math.max(...orderTotals));


const { starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
};

console.log(starter);
console.log(closer);
console.log(relievers);