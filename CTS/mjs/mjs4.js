//How Arrow Functions Work with 'this'

function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal
    
    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
        //console.log(this);
    }, 2000);
}

//const inv = new Invoice(200);
//inv.total;



//Variable Deconstruction

let playerOne = 'Jordan';
let playerTwo = 'Jim';

//Now
[playerOne, playerTwo] = [playerTwo, playerOne];

//Before 
//let tempPlayerOne = playerOne;
//let tempPlayerTwo = playerTwo;

//playerOne = tempPlayerTwo;
//playerTwo = tempPlayerOne;

//console.log(`
//Player One: ${playerOne}
//Player Two: ${playerTwo}
//`)




//Array Destructuring

const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
];

const [posts, repos, profile] = apiList; //assigns each variable to a entry in an array




//Combining Objects and Functions via Deconstruction

const user = {
    name: 'Jordan',
    email: 'email@email.com'
}

const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
}

//renderUser(user);