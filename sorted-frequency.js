function sortedFrequency(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middleIdx = Math.floor((right - left) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[left];
    let rightVal = arr[right];

    if (leftVal !== target || rightVal !== target) {
      if (middleVal < target && leftVal !== target) {
        left = left + 1;
      } else if (middleVal > target && rightVal !== target) {
        right = right - 1;
      } else if (middleVal === target) {
        if (leftVal !== target) {
          left = left + 1;
        } else if (rightVal !== target) {
          right = right - 1;
        } else {
          return right - left + 1;
        }
      }
    } else return right - left + 1;
  }
  return -1;
}

module.exports = sortedFrequency;
