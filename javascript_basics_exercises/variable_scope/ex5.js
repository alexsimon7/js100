function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

//answer: The above code throws a reference error because it tries to access 'a' on line 5 before declaring it on line 6.
