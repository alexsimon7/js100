function repeat(num, str) {
  let string = '';
  for(i = 1; i <= num; i += 1) {
    string += str;
  }
  return string;
}

repeat(3, 'ha');

//notes: May also be done as a while loop.
