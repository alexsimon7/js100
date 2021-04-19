let num = 4936;
let ones = 4936%10
console.log(ones);

num -= ones;
num /= 10;

let tens = num%10;
console.log(tens);

num -= tens;
num /= 10;

let hundreds = num%10;
console.log(hundreds);

num -= hundreds;
num /= 10;

let thousands = num;
console.log(thousands);

