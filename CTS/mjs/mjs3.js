//Integrating Conditionals into JS Strings with Ternary Operators

const page = 'about';
let layout = (`class= ${ page === 'Home' ? 'master-layout' : 'secondary-layout'}`);

//Arrow Functions

/*function fullName(fName, lName) {
    console.log(`${fName} ${lName}`);
}
fullName('Yaboi', 'Lemy');*/

/*var fullName = function (fName, lName) {
    console.log(`${fName} ${lName}`);
}
fullName('Yaboi', 'Lemy');*/

const helloWorld = () => { console.log('Hi there'); };
helloWorld();

const firstName = fName => { console.log(fName.toUpperCase()); };
firstName('Yaboi');

const fullName = (fName, lName) => {
    console.log(`${fName} ${lName}`);
};
fullName('Yaboi', 'Lemy');