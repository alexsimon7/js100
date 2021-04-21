function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

let tries = 0;
let result; //  value was originally set to 0, but changed for 'do...while' loop

/*
while (result <= 2) {
  result = randomNumberBetween(1,6);
  tries += 1;
*/
do {
  result = randomNumberBetween(1,6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//notes: intitally answered with a standard 'while' loop defining result as 0 so as to trigger the while loop the
//first time. Upon looking at the solution, refactored the while loop to a  'do...while' loop.
