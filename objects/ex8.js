let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(objToCopy, arrayOfKeys = Object.keys(objToCopy)) {
  let copy = Object.assign({}, objToCopy);
  for(let item in objToCopy) {
    if(arrayOfKeys.includes(item) === false) {
      delete copy[item]
    };
  };
  return copy;
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);

//notes: My solution above creates a function that takes two parameters: 1. an object and 2. an array of keys from 
//       that object (or in the event of nothing being passed, a full array). It then creates a copy of the object
//       and loops through the original object looking for items not in the array. Items not in the array are deleted
//       from the copy. The function then returns the copy.
//
//       The solution provided creates a function with the same two parameters without the default for the second.
//       It then creates an empty object. It then, through an 'if' statement, asks whether the array of keys exists
//       and, if so, loops through the array of keys adding those corresponding keys to the empty object. If the
//       array of keys does not exist, it creates a copy of the object through 'Object.assign'. 
