let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function threeIn (numbers) {
  return numbers.includes(3);
}

console.log(threeIn(numbers1));
console.log(threeIn(numbers2));
console.log(threeIn(numbers3));

