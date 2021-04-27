let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

object = {}
for (i  = 0; i < nestedArray.length; i++) {
  object[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(object);


