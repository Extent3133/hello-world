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

function unique(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const word = array[index];
     if (findIndex(result, word) === -1) {
      result.push(word);
     }
  }

  return result;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));