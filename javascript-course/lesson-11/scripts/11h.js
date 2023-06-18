function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  console.log(result)
}

addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);