function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();


//answer: The above code will log 1 because a is defined in an outer scope which can be accessed in any inner scope.
