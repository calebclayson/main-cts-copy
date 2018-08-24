// Reference vs Value
var someName = 'Caleb';

var someUser = {
    name: 'Jordan'
}

function nameFormatter (userName) {
    return userName = 'Oops';
}

console.log(nameFormatter(someUser.name));

console.log(someUser);

console.log(nameFormatter(someName));

console.log(someName);