let words = ['hello', 'world', 'search', 'good', 'search'];

let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);