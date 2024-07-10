function twoSum(numbers, target) {
  let resultCollect = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        resultCollect.push(i);
        resultCollect.push(j);
        return resultCollect;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 23));
