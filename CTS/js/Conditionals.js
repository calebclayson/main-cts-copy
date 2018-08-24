var age = 16;
var ageTwo = 15;

if (age === ageTwo) {  // strict equal (===) checks on value and type
    console.log('They are equal');
} else if(age > ageTwo) {
    console.log('age is greater than ageTwo');
} else if(ageTwo > age) {
    console.log('ageTwo is greater than age');
} else {
    console.log('Invalid Inputs');
}

if (age !== ageTwo) {  // strict not equals (!==) is similar to strict equal but it checks if they are not equal instead of equal
    console.log('They are not equal');
}

if (age >= 25) {
    console.log('Old enough to rent a car');
}

if (age <= 10) {
    console.log('You can eat from the kid menu');
} else {
    console.log(`${age} is too old for the kid's menu`);
}