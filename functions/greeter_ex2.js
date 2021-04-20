//answer to exercise below

let rlSync = require('readline-sync');

function nameGreet() {
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
return `${firstName} ${lastName}`;
}
console.log(`Hello, ${nameGreet()}!`);

//answer provided in solution

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

