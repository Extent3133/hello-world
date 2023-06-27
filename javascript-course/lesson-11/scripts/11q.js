function findIndex(array, word) {
  index = -1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
     if (element === word) {
      return index;
     }
  }

  return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));