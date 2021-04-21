function findIntegers(array) {
  return array.filter(value => Number.isInteger(value)/* === true*/);
}

findIntegers([1, 'a', '1', 3, NaN, 3.1415, -4, null, false]);

//notes: The '=== true' is duplicative. 'isInteger' returns a boolean value, true where the value is an integer. 'filter' returns a new
//       array of the values for all those values which pass the test ('true' being a pass; 'false' a fail) implemented by the provided
//       function.
