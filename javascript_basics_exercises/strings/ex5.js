let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(isEqual(string1, string2));
console.log(isEqual(string1, string3));

//notes: Creates a function to determine if both strings are the same irrespective of case. One could use
//       '.toLowerCase' as well.
