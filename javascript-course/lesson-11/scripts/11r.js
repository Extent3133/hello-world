function removeEgg(foods) {
  const result = [];
  for (let index = 0; index < foods.length; index++) {
     if (foods[index] === 'egg') {
      continue;
    }

    result.push(foods[index]);
  }

  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));