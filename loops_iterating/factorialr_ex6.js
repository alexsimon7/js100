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

function factorial(number) {
  let answer = 1;
  for (let counter = number; counter > 0; counter -=1) {
   answer *= counter; 
  }
  return answer;
}

*/

function factorial(number) {
  let answer = number;
  if (answer > 1) {
    answer *= factorial(number-1);
  }
  return answer;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

//notes: Solution uses an 'if (number === 1)' statement to signal the end of the recursion.  This is cleaner than defining an answer variable.
//See below:

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  
  return number * factorial(number-1);
}
  return factorial
