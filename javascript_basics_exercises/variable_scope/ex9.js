const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

//answer: The above code log an error because line 4 tries to reassign a constant variable.
