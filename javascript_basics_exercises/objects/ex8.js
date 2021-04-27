let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);

console.log(nestedPerson);

/*
The same can be done with a 'for in' loop. See below:

let nestedPerson = [];

for(let prop in person) {
  nestedPerson.push([prop, person[prop]]);
}






*/
