let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let removedItems =  groceryList.shift();
  console.log(removedItems);
}

console.log(groceryList);


//notes: Originally tried this with a 'for' loop which caused an issue iterating over a mutating
//       array. Fixed that issue by creating a copy of the list to iterate over.  The above while
//       code is cleaner.
