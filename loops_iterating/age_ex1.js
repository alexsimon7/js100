let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');

age = parseInt(age);

for(i = 0; i <= 40; i += 10) {
  if(i === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${i} years, you will be ${age + i} years old.`);
  }
}

//notes: Solution takes the initial age statement outside the loop. This is probably more efficient. It allows for
// the removal of the 'if else' statement. The solution also names the  'i' variables defined above as 'future'.

let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');

age = parseInt(age);
console.log(`You are ${age} years old.`);
for(future = 10; future <= 40; future += 10){
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}
