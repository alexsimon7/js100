function isBlank(string) {
  return string ?  false : true;
//return string.length === 0;
}

isBlank('mars');
isBlank('   ');
isBlank('');


//notes: .length could also be used.
