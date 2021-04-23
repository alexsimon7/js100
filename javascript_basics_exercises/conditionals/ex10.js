let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

//The above code wil log: true. Bonus - The parentheses are not needed to change the answer, the parentheses do however change
//the order of precedence.
