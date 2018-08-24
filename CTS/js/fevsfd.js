//Function Expressions vs. Function Declarations

/*
function greeting() {
    return 'Hi there!';
}

var greetingTwo = function() {
  return 'Hi there again';  
};

console.log(greeting());

console.log(greetingTwo);
*/

var age = 3;

if (age <= 10) {
    var buildMenu = () => {
        return "Kid's menu";
    };
    
    /* function buildMenuTwo() {
        return "Another kids' menu";  //gives an error because regular function declarations can't be declared inside statements
    }*/
    
    console.log(buildMenu());
    //console.log(buildMenuTwo);
}