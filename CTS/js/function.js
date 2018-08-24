function hiThere() {
  console.log('Hi there');
}

function hiThereTwo() {
  return 'Hi there again';
}

const storedText = hiThere();
const storedTextTwo = hiThereTwo();

hiThere();
hiThereTwo();
console.log(storedText);
console.log(storedTextTwo);