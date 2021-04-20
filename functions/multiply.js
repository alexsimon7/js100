// answer to prompt (notes: added 'parseFloat' to prevent potential input issue)
let rlSync = require('readline-sync');
let firstNum = parseFloat(rlSync.question('Enter the first number: '));
let secondNum = parseFloat(rlSync.question('Enter the second number: '));

function multiply(x, y) {
 console.log(`${x} * ${y} = ${x*y}`); 
}
multiply(firstNum, secondNum);

//answer provided in solution
/*
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/
