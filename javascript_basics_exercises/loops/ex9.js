let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for(name = 0; name < fish.length; name += 1) {
  console.log(fish[name]);
  if(fish[name] === 'Nemo') {
    break;
  }
}
