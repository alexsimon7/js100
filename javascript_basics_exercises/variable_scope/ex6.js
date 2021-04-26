let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

//answer: The above code will log 'false'. The two variables defined as 'b' have the same name but exist
//        in different scopes.  Accordingly, the console.log(b) on line 8 refers to the b declared on
//        line 2, not line 5.
