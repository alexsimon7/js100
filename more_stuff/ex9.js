function isNegativeZero(number) {
  if(4 / number === -Infinity && number === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(1));

/*
notes: Answer provides and 'if' statement to determine whether a number is -0 or not. The solution provides a more
streamlined answer:

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -infinity);
}

This answer allows for less lines of code. The return statement itself is a boolean comparison that will return the
a boolean rather than deliniating it with an 'if' statement.

*/
