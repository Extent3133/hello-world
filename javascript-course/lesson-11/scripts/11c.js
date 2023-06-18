function arraySwap(array) {
  const lastValue = array[array.length - 1];
  const firstValue = array[0];

  array[array.length - 1] = firstValue;
  array[0] = lastValue;

  console.log(array)
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good'])