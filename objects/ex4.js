let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objectKeys = Object.keys(obj);
console.log(objectKeys);
let upperKeys = objectKeys.map(key => key.toUpperCase());
console.log(upperKeys);

//notes: A 'map' loop creates a new array with the 'changed to uppercase' keys.  For a 'forEach' loop, an empty array
//       and .push can be used.

