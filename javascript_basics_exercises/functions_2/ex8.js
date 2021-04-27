let initGame = () => ({
  level: 1, score: 0 
});

let game = initGame()

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

//notes: KEY! -> JS does not interpret statements starting with a brace as an object literal. Instead
//       it treats those objects as blocks To force JS to treat the statement as an object literal
//       is to put braces () around it.
