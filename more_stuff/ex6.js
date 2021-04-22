let words = [
  'labratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(listOfWords, element) {
  let answer = [];
  listOfWords.forEach(function(word) {
    if(element.test(word)) {
      answer.push(word);
    }
  });
  return answer;
}



console.log(allMatches(words, /lab/));

//notes: Solution used a standard 'for' loop. Second solution used '.filter'. Filter seems to be the shortest code.
