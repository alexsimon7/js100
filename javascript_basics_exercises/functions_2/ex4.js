function calculateBMI(height, weight) {
  let bmi = weight / (height / 100)**2;
  return bmi.toFixed(2);   
}

calculateBMI(180, 80);

//notes: In the event, the problem called for a number versus a string, a variation on "Math.round()
//       can be used to get round decimal numbers.
