let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9, 
  17, 16, 0,
];
/*
let myNewArray = []
myArray.map(function(number) {
  if(number % 2 === 0) {
    myNewArray.push('even');
  } else {
    myNewArray.push('odd');
  }
});

console.log(myNewArray);
*/

//notes: Key here is remembering that 'map', like a function returns a new array. Below is the answer refactored for that.

let newArray = myArray.map(function(number) {
  if(number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);

