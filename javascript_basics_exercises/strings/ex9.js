let string = 'launch school tech & talk';
let capitalizedArray = [];
let stringArray = string.split(' ');

for (i = 0; i < stringArray.length; i += 1) {
  capitalizedArray.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
}
capitalizedArray.join(' ');


