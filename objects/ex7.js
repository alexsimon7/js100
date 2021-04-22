let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj);

//notes: Snippet one will return keys only for 'qux' because the code ignores inheritance. Snippet two will return
//       'foo', 'bar' and 'qux' because it does not ignore inheritance.
