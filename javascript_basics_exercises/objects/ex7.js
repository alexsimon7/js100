let vehicle = {
  manufacterer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

//notes: The same can be acheived through a 'for ... in loop'.  See below:

/*

let keys = [];

for(let prop in vehicle) {
  keys.push(prop);
}

console.log(keys);


*/
