function extractLanguage(code) {
  return code.slice(0,2);
}

console.log(extractLanguage('en_US.UTF-9'));
console.log(extractLanguage('en_GB.UTF-9'));
console.log(extractLanguage('ko_KR.UTF-16'));


//notes: Per solution could also use '.split' to split the string at the '_'. This creates an array
//which then we could call at the '0' position.
