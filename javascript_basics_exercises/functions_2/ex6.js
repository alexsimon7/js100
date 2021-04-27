function removeLastChar(word) {
  return word.slice(0,-1);
}

removeLastChar('ciao!');
removeLastChar('hello');

//notes: Can also use '.substring()'.  '.substring' takes a beginning and end index and returns the
//       the part of the string between those ranges (end not included).
