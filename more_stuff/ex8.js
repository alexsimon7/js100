function isNotANumber(value) {
  if(value) {
    return false;
  } else if(typeof(value) !== 'number') {
    return false;
  } else if(value === 0) {
    return false;
  } else {
    return true;
  };

}

console.log(isNotANumber(1));
console.log(isNotANumber(NaN));
console.log(isNotANumber(0));
console.log(isNotANumber(-0));
console.log(isNotANumber(0n));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));
console.log(isNotANumber(''));
console.log(isNotANumber(false));

/*notes: The above solution was an attempt to create 'if' statements to removes other potential values based on the fact that NaN is falsy. Removing
         all truthy values removes a majority of values leaving a short list (0, -0, 0n, '', undefined, null, and NaN) of values that were falsey. Of
         those values, only a few were of the number type (0, -0, and NaN). After removing values that were not the number type, 0 and -0 (which equal)
         left NaN as the only option by elimination.

         The answer is much simplier. Because NaN is the only value that does not equal itself, a return statement of  'return value !== value' 
         provides a quick answer.


*/
