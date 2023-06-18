function minMax(nums) {
  let minResult = 0;
  let maxResult = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) {
      minResult = nums[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      maxResult = nums[i + 1];
    }
  }

  return `min: ${minResult}, max: ${maxResult}`;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));