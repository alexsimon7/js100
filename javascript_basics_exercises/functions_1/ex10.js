function extractRegion(code) {
  return code.slice(3,5);
}

console.log(extractRegion('en_US.UTF-9'));
console.log(extractRegion('en_GB.UTF-9'));
console.log(extractRegion('ko_KR.UTF-16'));

//notes: Again, per exercise 8, this can be solved by using '.split' to split the string at the '.' 
//and then at the '_'.

