let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(0, 1);
energy.push('geothermal');

console.log(energy);

//notes: Can also remove elements of an array with .shift and .slice. .shift removes the element
//       at the zeroeth index and shifts the entire array down. .slice returns a copy of an array
//       with certain portions removed based on the passed parameters.


