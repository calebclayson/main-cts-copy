function fullName(firstName, lastName, language) {
    var language = language || 'English';
    console.log(lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language);
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

fullName('Yaboi', 'Lemy');
sample();