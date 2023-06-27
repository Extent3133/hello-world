function removeEgg(foods) {
  const reversedFoods = foods.reverse();

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

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));