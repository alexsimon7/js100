let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome','Aruba', 'Paris', 'Bora Bora',
  'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marakesh', 'New York City'];

function contains(city, array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === city) {
      return true;
    }
  }
  return false;
}





console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));


//notes: Could also solve this problem by leveraging '.indexOf()' which returns a '-1' where an element is not present
//       in an array.
