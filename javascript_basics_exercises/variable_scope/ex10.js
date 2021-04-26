const a = {
  firstName: 'John',
  lastName: 'Doe',
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction()

console.log(a);

//answer: The above code will log { firstName: 'Jane', lastName: 'Doe' }. While 'a', an object, is
//        defined with a 'const'(making it constant), this only prevents a reassignemnt of the variable
//        not changes to its contents.
