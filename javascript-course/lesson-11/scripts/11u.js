function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  const result = [];
  let eggsRemoved = 0;

  for (let index = 0; index < reversedFoods.length; index++) {
     if (foods[index] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(foods[index]);
  }

  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);