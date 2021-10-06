function countZeroes(arr) {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal !== 0) {
      left = middleIdx + 1;
    } else {
      let leftVal = arr[left];
      if (leftVal !== 0) {
        left = left + 1;
      } else {
        return right - left;
      }
    }
  }
  return 0;
}

module.exports = countZeroes;
