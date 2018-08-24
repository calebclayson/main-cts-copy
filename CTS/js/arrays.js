var generatedArray = new Array('Guy', 'Lemy', 'Jobe');

var literalArray = [1, 2, 3];

var mixedArray = [
    'Hi',
    1,
    ['a', 'b', 'c'],
    { name: 'Jordan' },
    function greeting() { console.log('hey there');}
    ];

console.log(literalArray);

console.log(literalArray[1]);

console.log(mixedArray[2][2]);

console.log(mixedArray[3].name);

console.log(mixedArray[4]());