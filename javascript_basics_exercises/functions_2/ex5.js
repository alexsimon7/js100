function catAge(years) {
  if (years === 0) {
    return 0;
  } else if (years === 1) {
    return 15;
  } else if (years === 2) {
    return 24;
  } else {
    return 24 + ((years - 2) * 4)
  }
}

catAge(0);
catAge(1);
catAge(2);
catAge(3);
catAge(4);


/*
Note: It is also possibe to do the above with a 'switch' statement. See below:

function catAge(years) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (year - 2) *4; 
  }
} 


*/
