let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// The above code does not ever log "It's true" because object property names are returned as strings. Accordingly, none of the object
// property names will equal the boolean true.
