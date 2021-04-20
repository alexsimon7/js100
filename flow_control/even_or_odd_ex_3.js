function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log(`Error - '${num}' is not an integer.`);
    return; 
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
  console.log('odd');
  }
}
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(3.5);
evenOrOdd('Hi');

/*notes: Fixed code to use 'isInteger' instead of typeof. 'isInteger' will make sure that num is an integer as 
opposed to typeof === 'number' which only determines if num is a number. Because the problem asked for a return,
moved the 'error' catching portion above even odd portion.
*/
