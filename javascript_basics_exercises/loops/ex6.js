let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for(index = 0; index < cities.length; index += 1) {
  if(cities[index] === null) {
    continue;
//  } else {
  }
  console.log(cities[index].length);
//  }
};

//notes: Due to the continue, the above does not need the else statement.  Also, 'continue' does not work for 'forEach' loops.
