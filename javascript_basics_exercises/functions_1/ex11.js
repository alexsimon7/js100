function extractLanguage(code) {
  return code.slice(0,2);
}

function extractRegion(code) {
  return code.slice(3,5);
}

function greet(code) {
  switch (code) {
    case 'en': return 'Hi!';
//      console.log('Hi!');
//      break;
    case 'fr': return 'Salut!';
//      console.log('Salut!');
//      break;
    case 'pt': return 'Ola!';
//      console.log('Ola!');
//      break;
    case 'de': return 'Hallo!';
//      console.log('Hallo!');
//      break;
    case 'sv': return 'Hej!';
//      console.log('Hej!');
//      break;
    case 'af': return 'Haai!';
//      console.log('Haai!');
//      break;
  }
}

function localGreet(locale) {
  if(extractLanguage(locale) === 'en') {
    if(extractRegion(locale) === 'US') {
      return 'Hey!';
    } else if(extractRegion(locale) === 'GB') {
      return 'Hello!';
    } else if (extractRegion(locale) === 'AU') {
      return 'Howdy!';
    }
  } else {
    return greet(extractLanguage(locale));
  }
}


console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));

/*
Instead of nested 'if' statements with the prior functions in the 'localGreet' function,
the prior functions could be assigned to variables and a switch statement could be used.  See
below:

function localGreet(locale) {
  let language = extractLanguage(locale);
  let language = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}






*/
