/*

initially answered the problem as a 'while' loop.

function factorial(number) {
  let counter = 1;
  let answer = 1;
  while (counter <= number) {
    answer *= counter;
    counter += 1;
  }
  return answer;
}
*/

function factorial(number) {
  let answer = 1;
  for (let counter = number; counter > 0; counter -=1) {
   answer *= counter; 
  }
  return answer;
}



console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


