let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0);

}

console.log(sumOfSquares(array));

//notes: Solution provided the answer as shown below:

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  } 0);
}
