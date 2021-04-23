let randomNumber = Math.round(Math.random());

if(randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No.');
}

//notes: Because 0 is falsy, could use 'if(randomNumber) {' instead of 'if(randomNumber === 1)'
