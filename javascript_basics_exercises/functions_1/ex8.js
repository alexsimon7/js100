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

greet('en');
greet('fr');
greet('pt');
greet('de');
greet('sv');
greet('af');


/*notes: Solution alters the switch statement to be formatted like the below:

case 'en': return 'Hi!';


This allows us not to use break statements and makes a more concise code.

*/
