const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  const num = array[i];
  result.push(num + 1);
}

console.log(result);