var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
var foundElement = arr.indexOf('Correa');
arr.splice(foundElement, 1); //removes specific item and returns it as an array
console.log(arr);
arr.splice(1, 2);
console.log(arr);