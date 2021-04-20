function numberRange(num) {
  if (num < 0) {
      console.log(`${num} is less than 0`);
  } else if (num <= 50) {
      console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
      console.log(`${num} is between 51 and 100`);
  } else {
      console.log(`${num} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

//notes: removed 'num >= 0' and 'num >= 51' because those are satified up the 'if' chain per solution.
