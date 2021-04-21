let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
/*
let lengths = arr.map(number => number.length);
let oddLengths = lengths.filter(length => length % 2 !== 0);

console.log(oddLengths);
notes: The solution created a function. Below is the above converted to a function.

function oddLengths(strings) {
  let lengths = strings.map((number) => number.length);
  let oddOnly = lengths.filter((length) => length % 2 !== 0);
  return oddOnly;
}
*/

function oddLengths(array) {
  return array.reduce((newArray, letters) => {
    let length = letters.length;
    if (letters.length % 2 !== 0) {
      newArray.push(length);
    }

    return newArray;
  }, []);
}

console.log(oddLengths(arr));
